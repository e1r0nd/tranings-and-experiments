package dto

type CustomerResponse struct {
	Id          string `json:"customer_id" xml:"id" db:"customer_id"`
	Name        string `json:"full_name" xml:"fullname"`
	City        string `json:"city" xml:"city"`
	Zipcode     string `json:"zip_code" xml:"zipcode"`
	DateOfBirth string `json:"date_of_birth" xml:"dateofbirth" db:"date_of_birth"`
	Status      string `json:"status" xml:"status"`
}
