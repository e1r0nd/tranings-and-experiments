# Introduction

Based on the Udemy Course [REST based microservices API development in Golang](https://www.udemy.com/course/rest-based-microservices-api-development-in-go-lang/) by Ashish Juyal

- Banking https://github.com/ashishjuyal/banking
- Banking-Auth https://github.com/ashishjuyal/banking-auth
- Banking-lib https://github.com/ashishjuyal/banking-lib

# Installation

Run `docker-compose up` and open http://localhost:8000/

Use
- System: MySQL
- Server: mysql
- User: root
- Password: rootpassword
- Database: mysql

Populate `fakedata.sql` as SQL command

# Development

```bash
docker-compose up
nodemon --watch . -e go --signal SIGTERM --exec 'go run main.go || exit 1'
```

# Testing

Open:

```
http://localhost:8000/greet
http://localhost:8000/customers
http://localhost:8000/customers/2000
```

Requests:

- Get All customers GET http://localhost:8000/customers
- Get customer by Id GET http://localhost:8000/customers/2000
- Create customer POST http://localhost:8000/customers
- Add account POST http://localhost:8000/customers/2001/account
```json
{
    "account_type": "savings",
    "amount": 423.10
}
```
- Add transaction POST http://localhost:8000/customers/2001/account/95470
```json
{
    "transaction_type": "deposit",
    "amount": 13.1
}
```