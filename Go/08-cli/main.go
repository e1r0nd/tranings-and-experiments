package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	// expects go run ./main.go 32.2 40
	fmt.Println("os.Args:", os.Args)
	fmt.Println("No of:", len(os.Args))

	var res, err = strconv.ParseFloat(os.Args[1], 64)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Printf("Arg[1] %T is %v\n", res, res)

	if i, err := strconv.Atoi(os.Args[2]); err == nil {
		fmt.Printf("Arg[2] %T is %v\n", i, i)
	} else {
		fmt.Println(err)
	}
}
