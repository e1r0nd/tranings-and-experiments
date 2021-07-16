package domain

import "github.com/e1r0nd/banking/dto"

const WITHDRAWAL = "withdrawal"

type Transaction struct {
	TransactionId   int64   `json:"transaction_id"`
	AccountId       int64   `json:"account_id"`
	Amount          float64 `json:"amount"`
	TransactionType string  `json:"transaction_type"`
	TransactionDate string  `json:"transaction_date"`
}

func (t Transaction) IsWithdrawal() bool {
	return t.TransactionType == WITHDRAWAL
}

func (t Transaction) ToDto() dto.TransactionRequest {
	return dto.TransactionResponse{
		TransactionId:   t.TransactionId,
		AccountId:       t.AccountId,
		Amount:          t.Amount,
		TransactionType: t.TransactionType,
		TransactionDate: t.TransactionDate,
	}
}
