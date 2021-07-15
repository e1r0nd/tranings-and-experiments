package domain

import (
	"github.com/e1r0nd/banking/dto"
	errs "github.com/e1r0nd/banking/errs"
)

type Account struct {
	AccountId   string  `json:"account_id"`
	CustomerId  string  `json:"customer_id"`
	OpeningDate string  `json:"opening_date"`
	AccountType string  `json:"account_type"`
	Amount      float64 `json:"amount"`
	Status      string  `json:"status"`
}

type AccountRepository interface {
	Save(Account) (*Account, *errs.AppError)
}

func (a Account) ToNewAccountResponseDto() dto.NewAccountResponse {
	return dto.NewAccountResponse{a.AccountId}
}
