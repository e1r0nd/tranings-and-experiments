package app

import (
	"encoding/json"
	"encoding/xml"
	"fmt"
	"net/http"
)

type Customer struct {
	Name    string `json:"full_name" xml:"fullname"`
	City    string `json:"city" xml:"city"`
	Zipcode string `json:"zip_code" xml:"zipcode"`
}

func greet(res http.ResponseWriter, req *http.Request) {
	fmt.Fprint(res, "Hello World")
}

func getAllCustomers(res http.ResponseWriter, req *http.Request) {
	customers := []Customer{
		{Name: "Robert", City: "London", Zipcode: "01001"},
		{Name: "Elena", City: "Moscow", Zipcode: "12322"},
	}

	if req.Header.Get("Content-Type") == "application/xml" {
		res.Header().Add("Content-type", "application/xml")
		xml.NewEncoder(res).Encode(customers)
	} else {
		res.Header().Add("Content-type", "application/json")
		json.NewEncoder(res).Encode(customers)
	}

}
