package app

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/e1r0nd/banking/domain"
	"github.com/e1r0nd/banking/logger"
	"github.com/e1r0nd/banking/service"
	"github.com/gorilla/mux"
	"github.com/jmoiron/sqlx"
)

func Start() {
	router := mux.NewRouter()
	// wiring
	// ch := CustomerHandlers{service.NewCustomerService(domain.NewCustomerRepositoryStub())}

	dbClient := createDbClient()
	customerRepositoryDb := domain.NewCustomerRepositoryDB(dbClient)
	accountRepositoryDb := domain.NewAccountRepositoryDb(dbClient)
	ch := CustomerHandlers{service.NewCustomerService(customerRepositoryDb)}
	ah := AccountHandlers{service.NewAccountService(accountRepositoryDb)}

	// define routes
	router.HandleFunc("/greet", greet).Methods(http.MethodGet)

	router.HandleFunc("/customers", ch.getAllCustomers).Methods(http.MethodGet)
	router.HandleFunc("/customers/{customer_id:[0-9]+}", ch.getCustomer).Methods(http.MethodGet)
	router.HandleFunc("/customers/{customer_id:[0-9]+}/account", ah.NewAccount).Methods(http.MethodPost)
	router.HandleFunc("/customers/{customer_id:[0-9]+}/account/{account_id:[0-9]+}", ah.MakeTransaction).Methods(http.MethodPost)

	router.HandleFunc("/customers", createCustomer).Methods(http.MethodPost)

	// Load env variables
	address := "localhost"
	port := "8000"
	if os.Getenv("SERVER_ADDRESS") != "" {
		address = os.Getenv("SERVER_ADDRESS")
	}
	if os.Getenv("SERVER_PORT") != "" {
		port = os.Getenv("SERVER_PORT")
	}

	// Run server
	logger.Info(fmt.Sprintf("Server started at http://%s:%s", address, port))
	log.Fatal(http.ListenAndServe(address+":"+port, router))
}

func createDbClient() *sqlx.DB {
	dbSource := "root:rootpassword@tcp(localhost:3306)/banking"
	if os.Getenv("DB_LINK") != "" {
		dbSource = os.Getenv("DB_LINK")
	}
	client, err := sqlx.Open("mysql", dbSource)
	if err != nil {
		panic(err)
	}
	// See "Important settings" section.
	client.SetConnMaxLifetime(time.Minute * 3)
	client.SetMaxOpenConns(10)
	client.SetMaxIdleConns(10)

	return client
}
