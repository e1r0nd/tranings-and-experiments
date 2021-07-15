package domain

import (
	"github.com/e1r0nd/banking/dto"
	errs "github.com/e1r0nd/banking/errs"
)

type Customer struct {
	Id          string `json:"id" xml:"id" db:"customer_id"`
	Name        string `json:"full_name" xml:"fullname"`
	City        string `json:"city" xml:"city"`
	Zipcode     string `json:"zip_code" xml:"zipcode"`
	DateOfBirth string `json:"date_of_birth" xml:"dateofbirth" db:"date_of_birth"`
	Status      string `json:"status" xml:"status"`
}

func (c Customer) statusAsText() string {
	switch c.Status {
	case "1":
		return "Active"
	case "0":
		return "Inactive"
	}
	return "Unknown"
}

func (c Customer) ToDto() dto.CustomerResponse {
	return dto.CustomerResponse{
		Id:          c.Id,
		Name:        c.Name,
		City:        c.City,
		Zipcode:     c.Zipcode,
		DateOfBirth: c.DateOfBirth,
		Status:      c.statusAsText(),
	}
}

type CustomerRepository interface {
	FindAll(string) ([]Customer, *errs.AppError)
	ById(string) (*Customer, *errs.AppError)
}
