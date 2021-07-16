package dto

import (
	"fmt"
	"strings"

	errs "github.com/e1r0nd/banking/errs"
)

type NewAccountRequest struct {
	CustomerId  string  `json:"customer_id"`
	AccountType string  `json:"account_type"`
	Amount      float64 `json:"amount"`
}

func (r NewAccountRequest) Validate() *errs.AppError {
	if r.Amount < 0 {
		return errs.NewValidationError("Amount cannot be negative")
	}
	fmt.Println(r.AccountType)

	if strings.ToLower(r.AccountType) != "savings" && strings.ToLower(r.AccountType) != "checking" {
		return errs.NewValidationError("Account type must be Savings or Checking")
	}
	return nil
}
