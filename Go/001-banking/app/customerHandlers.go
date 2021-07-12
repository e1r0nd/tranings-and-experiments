package app

import (
	"encoding/json"
	"encoding/xml"
	"fmt"
	"log"
	"net/http"

	"github.com/e1r0nd/banking/service"
	"github.com/gorilla/mux"
)

type CustomerHandlers struct {
	service service.CustomerService
}

func greet(w http.ResponseWriter, req *http.Request) {
	fmt.Fprint(w, "Hello World")
}

func (ch *CustomerHandlers) getAllCustomers(w http.ResponseWriter, r *http.Request) {
	log.Println("Get all customers")
	status := r.URL.Query().Get("status")
	customers, err := ch.service.GetAllCustomer(status)

	if err != nil {
		writeResponse(w, "application/json", http.StatusInternalServerError, err.AsMessage())
		return
	}

	var contentType string
	if r.Header.Get("Content-Type") == "application/xml" {
		contentType = "application/xml"
	} else {
		contentType = "application/json"
	}
	writeResponse(w, contentType, http.StatusOK, customers)
}

// Get customer by id
func (ch *CustomerHandlers) getCustomer(w http.ResponseWriter, r *http.Request) {
	log.Println("Get customer")
	vars := mux.Vars(r)
	id := vars["customer_id"]
	customer, err := ch.service.GetCustomer(id)
	if err != nil {
		// http.Error(w, err.Message, err.Code)
		writeResponse(w, "application/json", err.Code, err.AsMessage())
		return
	}

	if r.Header.Get("Content-Type") == "application/xml" {
		writeResponse(w, "application/xml", http.StatusOK, customer)
	} else {
		writeResponse(w, "application/json", http.StatusOK, customer)
	}
}

// Response with the Content-type, Status and message
func writeResponse(w http.ResponseWriter, contentType string, code int, message interface{}) {
	w.Header().Add("Content-type", contentType)
	w.WriteHeader(code)

	var err error
	if contentType == "application/xml" {
		err = xml.NewEncoder(w).Encode(message)
	} else {
		err = json.NewEncoder(w).Encode(message)
	}
	if err != nil {
		panic(err)
	}
}

func getCustomer(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Fprintf(w, vars["customer_id"])
}

func createCustomer(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Post request received")
}
