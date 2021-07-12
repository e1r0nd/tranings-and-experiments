package service

import (
	"github.com/e1r0nd/banking/domain"
	err "github.com/e1r0nd/banking/errs"
)

type CustomerService interface {
	GetAllCustomer(string) ([]domain.Customer, *err.AppError)
	GetCustomer(string) (*domain.Customer, *err.AppError)
}

type DefaultCustomerService struct {
	repo domain.CustomerRepository
}

func (s DefaultCustomerService) GetAllCustomer(status string) ([]domain.Customer, *err.AppError) {
	if status == "active" {
		status = "1"
	} else if status == "inactive" {
		status = "0"
	} else {
		status = ""
	}
	return s.repo.FindAll(status)
}

func (s DefaultCustomerService) GetCustomer(id string) (*domain.Customer, *err.AppError) {
	return s.repo.ById(id)
}

func NewCustomerService(repo domain.CustomerRepository) CustomerService {
	return DefaultCustomerService{repo}
}
