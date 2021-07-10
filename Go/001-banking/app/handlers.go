package app

import (
	"encoding/json"
	"encoding/xml"
	"fmt"
	"net/http"

	"github.com/e1r0nd/banking/service"
	"github.com/gorilla/mux"
)

type Customer struct {
	Name    string `json:"full_name" xml:"fullname"`
	City    string `json:"city" xml:"city"`
	Zipcode string `json:"zip_code" xml:"zipcode"`
}

type CustomerHandlers struct {
	service service.CustomerService
}

func greet(w http.ResponseWriter, req *http.Request) {
	fmt.Fprint(w, "Hello World")
}

func (ch *CustomerHandlers) getAllCustomers(w http.ResponseWriter, req *http.Request) {
	// customers := []Customer{
	// 	{Name: "Robert", City: "London", Zipcode: "01001"},
	// 	{Name: "Elena", City: "Moscow", Zipcode: "12322"},
	// }
	customers, _ := ch.service.GetAllCustomer()

	if req.Header.Get("Content-Type") == "application/xml" {
		w.Header().Add("Content-type", "application/xml")
		xml.NewEncoder(w).Encode(customers)
	} else {
		w.Header().Add("Content-type", "application/json")
		json.NewEncoder(w).Encode(customers)
	}

}

func getCustomer(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Fprintf(w, vars["customer_id"])
}

func createCustomer(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Post request received")
}
