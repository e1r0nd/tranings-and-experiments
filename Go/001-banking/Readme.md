# Introduction

Based on the Udemy Course [REST based microservices API development in Golang](https://www.udemy.com/course/rest-based-microservices-api-development-in-go-lang/) by Ashish Juyal

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