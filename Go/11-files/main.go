package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	var newFile *os.File
	fmt.Printf("%#v of type: %T\n", newFile, newFile)

	var err error
	newFile, err = os.Create("a.txt")
	if err != nil {
		// fmt.Println(err)
		// os.Exit(1)
		log.Fatal(err)
	}
	err = os.Truncate("a.txt", 0)
	if err != nil {
		log.Fatal(err)
	}
	newFile.Close()

	var file *os.File
	file, err = os.OpenFile("a.txt", os.O_CREATE|os.O_APPEND, 0644)
	if err != nil {
		log.Fatal(err)
	}
	file.Close()

	file, err = os.OpenFile(
		"new.txt",
		os.O_WRONLY|os.O_TRUNC|os.O_CREATE,
		0644,
	)
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()
	byteSlice := []byte("I learn Golang!")
	byteWritten, err := file.Write(byteSlice)
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Bytes: %v", byteWritten)
}
