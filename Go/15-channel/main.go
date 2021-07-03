package main

import "fmt"

func f1(s string, ch chan string) {
	ch <- s
}

func main() {
	// var ch chan int
	// ch = make(chan int)
	ch := make(chan string)
	defer close(ch)
	fmt.Println(ch)

	// for receiving only
	c1 := make(<-chan string)
	// for sending only
	c2 := make(chan<- string)
	fmt.Printf("c1:%T, c2:%T\n", c1, c2)

	go f1("TEST", ch)
	res := <-ch
	fmt.Println(res)
	fmt.Println("Exit.")
}
