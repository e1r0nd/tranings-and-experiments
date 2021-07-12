package app

import (
	"fmt"
	"log"
	"net/http"

	"github.com/e1r0nd/banking/domain"
	"github.com/e1r0nd/banking/service"
	"github.com/gorilla/mux"
)

func Start() {
	router := mux.NewRouter()
	// wiring
	// ch := CustomerHandlers{service.NewCustomerService(domain.NewCustomerRepositoryStub())}
	ch := CustomerHandlers{service.NewCustomerService(domain.NewCustomerRepositoryDB())}

	// define routes
	router.HandleFunc("/greet", greet).Methods(http.MethodGet)

	router.HandleFunc("/customers", ch.getAllCustomers).Methods(http.MethodGet)
	// router.HandleFunc("/customers/", ch.getAllCustomers).Methods(http.MethodGet)

	router.HandleFunc("/customers/{customer_id:[0-9]+}", ch.getCustomer).Methods(http.MethodGet)

	router.HandleFunc("/customers", createCustomer).Methods(http.MethodPost)

	// run server
	fmt.Println("Server started at http://localhost:8000")
	log.Fatal(http.ListenAndServe("localhost:8000", router))
}
