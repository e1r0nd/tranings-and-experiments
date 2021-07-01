package main

import "fmt"

func change(a *int) *float64 {
	*a = 100
	fmt.Println("Inside x =", *a)

	// that is just for example how to return a pointer
	b := 5.5
	return &b
}

func main() {
	name := "Andrei"
	fmt.Println(&name)

	var x int = 2
	ptr := &x
	fmt.Printf("ptr is of type %T and a value of %v\n", ptr, ptr)
	fmt.Printf("address of x is %p\n", &x)

	y := 8
	fmt.Println("Before x =", y)
	change(&y) // send the pointer
	fmt.Println("After x =", y)
}
