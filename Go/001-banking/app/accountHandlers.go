package app

import (
	"encoding/json"
	"net/http"

	"github.com/e1r0nd/banking/dto"
	"github.com/e1r0nd/banking/service"
	"github.com/gorilla/mux"
)

type AccountHandlers struct {
	service service.AccountService
}

func (h AccountHandlers) NewAccount(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	customerId := vars["customer_id"]
	var request dto.NewAccountRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	request.CustomerId = customerId
	account, appError := h.service.NewAccount(request)
	if appError != nil {
		writeResponse(w, "application/json", appError.Code, appError.AsMessage())
		return
	}
	writeResponse(w, "application/json", http.StatusCreated, account)
}

func (h AccountHandlers) MakeTransaction(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	accountId := vars["account_id"]
	customerId := vars["customer_id"]
	//decode incoming request
	var request dto.TransactionRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		writeResponse(w, "application/json", http.StatusBadRequest, err.Error())
		return
	}

	// build the request object
	request.AccountId = accountId
	request.CustomerId = customerId

	// make transaction
	transaction, appError := h.service.MakeTransaction(request)
	if appError != nil {
		writeResponse(w, "application/json", appError.Code, appError.AsMessage())
		return
	}
	writeResponse(w, "application/json", http.StatusCreated, transaction)
}
