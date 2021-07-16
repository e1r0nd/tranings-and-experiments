package domain

import (
	"strconv"

	errs "github.com/e1r0nd/banking/errs"
	"github.com/e1r0nd/banking/logger"
	"github.com/jmoiron/sqlx"
)

type AccountRepositoryDb struct {
	client *sqlx.DB
}

func (d AccountRepositoryDb) Save(a Account) (*Account, *errs.AppError) {
	sqlInsert := "INSERT INTO accounts (customer_id, opening_date, account_type, amount, status) VALUES (?, ?, ?, ?, ?)"
	result, err := d.client.Exec(sqlInsert, a.CustomerId, a.OpeningDate, a.AccountType, a.Amount, a.Status)

	if err != nil {
		logger.Error("DB error: " + err.Error())
		return nil, errs.NewUnexpectedError("Server Internal Error")
	}
	id, err := result.LastInsertId()
	if err != nil {
		logger.Error("DB error: " + err.Error())
		return nil, errs.NewUnexpectedError("Server Internal Error")
	}
	a.AccountId = strconv.FormatInt(id, 10)
	return &a, nil
}

func (d AccountRepositoryDb) SaveTransaction(t Transaction) (*Transaction, *errs.AppError) {
	// starting DB transaction block
	tx, err := d.client.Begin()
	if err != nil {
		logger.Error("DB error: " + err.Error())
		return nil, errs.NewUnexpectedError("Server Internal Error")
	}

	// insert bank account transaction
	sqlInsert := "INSERT INTO transactions (account_id, amount, transaction_type,transaction_date) VALUES (?, ?, ?, ?)"
	result, err := d.client.Exec(sqlInsert, t.AccountId, t.Amount, t.TransactionType, t.TransactionDate)
	if err != nil {
		logger.Error("DB error: " + err.Error())
		return nil, errs.NewUnexpectedError("Server Internal Error")
	}
	// update account balance
	if t.IsWithdrawal() {
		sqlUpdate := "UPDATE accounts SET amount = amount - ? WHERE account_id = ?"
		_, err := d.client.Exec(sqlUpdate, t.Amount, t.AccountId)
		if err != nil {
			logger.Error("DB error: " + err.Error())
			return nil, errs.NewUnexpectedError("Server Internal Error")
		}
	} else {
		sqlUpdate := "UPDATE accounts SET amount = amount + ? WHERE account_id = ?"
		_, err := d.client.Exec(sqlUpdate, t.Amount, t.AccountId)
		if err != nil {
			logger.Error("DB error: " + err.Error())
			return nil, errs.NewUnexpectedError("Server Internal Error")
		}
	}

	// in case of error rollback and changes from both tables will be reverted
	if err != nil {
		tx.Rollback()
		logger.Error("DB error: " + err.Error())
		return nil, errs.NewUnexpectedError("Server Internal Error")
	}
	// commit the transaction when all is good
	err = tx.Commit()
	if err != nil {
		logger.Error("DB error: " + err.Error())
		return nil, errs.NewUnexpectedError("Server Internal Error")
	}
	// getting the last ID from the transaction table
	transactionId, err := result.LastInsertId()
	if err != nil {
		logger.Error("DB error: " + err.Error())
		return nil, errs.NewUnexpectedError("Server Internal Error")
	}
	// Getting the latest information from the accounts table
	account, appError := d.FindBy(t.AccountId)
	if appError != nil {
		return nil, appError
	}
	t.TransactionId = strconv.FormatInt(transactionId, 10)

	// update the transanction struct with the latest balance
	t.Amount = account.Amount
	return &t, nil
}

func NewAccountRepositoryDb(dbClient *sqlx.DB) AccountRepositoryDb {
	return AccountRepositoryDb{dbClient}
}
