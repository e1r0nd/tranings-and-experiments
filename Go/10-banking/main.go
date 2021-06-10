package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type Customer struct {
	Name    string `json:"full_name"`
	City    string `json:"city"`
	Zipcode string `json:"zip_code"`
}

func main() {
	// define routes
	http.HandleFunc("/greet", greet)
	http.HandleFunc("/customers", getAllCustomers)

	// run server
	log.Fatal(http.ListenAndServe("localhost:8000", nil))
}

func greet(res http.ResponseWriter, req *http.Request) {
	fmt.Fprint(res, "Hello World")
}

func getAllCustomers(res http.ResponseWriter, req *http.Request) {
	customers := []Customer{
		{Name: "Robert", City: "London", Zipcode: "01001"},
		{Name: "Elena", City: "Moscow", Zipcode: "12322"},
	}
	res.Header().Add("Content-type", "application/json")
	json.NewEncoder(res).Encode(customers)
}
