package domain

type CustomerRepositoryStub struct {
	customers []Customer
}

func (s CustomerRepositoryStub) FindAll() ([]Customer, error) {
	return s.customers, nil
}

func NewCustomerRepositoryStub() CustomerRepositoryStub {
	customers := []Customer{
		{Id: "123", Name: "Robert", City: "London", Zipcode: "01001", DateOfBirth: "12.01.2011"},
		{Id: "331", Name: "Elena", City: "Moscow", Zipcode: "12322", DateOfBirth: "30.12.2002"},
	}

	return CustomerRepositoryStub{customers: customers}
}
