package main

import (
	"github.com/e1r0nd/banking/app"
	"github.com/e1r0nd/banking/logger"
)

func main() {
	logger.Info("Starting the application...")
	app.Start()
}
