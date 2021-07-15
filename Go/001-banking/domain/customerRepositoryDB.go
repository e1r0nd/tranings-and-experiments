package domain

import (
	"database/sql"

	errs "github.com/e1r0nd/banking/errs"
	"github.com/e1r0nd/banking/logger"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

type CustomerRepositoryDB struct {
	client *sqlx.DB
}

func (d CustomerRepositoryDB) FindAll(status string) ([]Customer, *errs.AppError) {
	var err error
	customers := make([]Customer, 0)

	if status == "" {
		findAllSql := "SELECT customer_id, name, city, zipcode, date_of_birth, status FROM customers"
		err = d.client.Select(&customers, findAllSql)
	} else {
		findAllSql := "SELECT customer_id, name, city, zipcode, date_of_birth, status FROM customers WHERE status = ?"
		err = d.client.Select(&customers, findAllSql, status)
	}
	if err != nil {
		logger.Error("Error: " + err.Error())
		return nil, errs.NewUnexpectedError("Server Internal Error")
	}

	return customers, nil
}

// Find by id implemention.
func (d CustomerRepositoryDB) ById(id string) (*Customer, *errs.AppError) {
	findByIdSql := "SELECT customer_id, name, city, zipcode, date_of_birth, status FROM customers WHERE customer_id = ?"
	var c Customer
	err := d.client.Get(&c, findByIdSql, id)
	if err != nil {
		logger.Error("Error:" + err.Error())
		if err == sql.ErrNoRows {
			return nil, errs.NewNotFoundError("Customer not found")
		}
		return nil, errs.NewUnexpectedError("Server Internal Error")
	}
	return &c, nil
}

func NewCustomerRepositoryDB(dbClient *sqlx.DB) CustomerRepositoryDB {
	return CustomerRepositoryDB{dbClient}
}
