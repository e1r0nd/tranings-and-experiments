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

func (d *AccountRepositoryDb) Save(a Account) (*Account, *errs.AppError) {
	result, err := d.client.NamedExec(`
		INSERT INTO accounts (
			customer_id
			opening_date,
			account_type,
			amount,
			status
		) VALUES (
			:CustomerId,
			:OpeningDate,
			:AccountType,
			:Amount,
			:Status
		)
	`, a)

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

func NewAccountRepositoryDb(dbClient *sqlx.DB) AccountRepositoryDb {
	return AccountRepositoryDb{dbClient}
}
