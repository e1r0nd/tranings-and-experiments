package main

import "fmt"

func main() {
	fmt.Println("Hello World!")

	const multiplicator = 0.234
	var n = 123
	fmt.Printf("Result is: %.3f \n", float32(n)*multiplicator)

	car, cost := "Audi", 10
	fmt.Printf("%v '%q is %T' %+d \n", car, car, car, cost)

	var x uint8 = 255
	x++
	fmt.Println("1:", x)

	var y int8 = 127
	y++
	fmt.Println("2:", y)
}
