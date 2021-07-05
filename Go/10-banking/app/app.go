package app

import (
	"fmt"
	"log"
	"net/http"
)

func Start() {
	mux := http.NewServeMux()
	// define routes
	mux.HandleFunc("/greet", greet)
	mux.HandleFunc("/customers", getAllCustomers)

	// run server
	fmt.Println("Server started at http://localhost:8000")
	log.Fatal(http.ListenAndServe("localhost:8000", mux))
}
