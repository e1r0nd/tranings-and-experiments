package main

import (
	"github.com/joho/godotenv"

	"github.com/e1r0nd/banking/app"
	"github.com/e1r0nd/banking/logger"
)

func main() {
	logger.Info("Starting the application...")

	// Load env variables via .env file
	err := godotenv.Load()
	if err != nil {
		logger.Error("Error loading .env file: " + err.Error())
	}

	app.Start()
}
