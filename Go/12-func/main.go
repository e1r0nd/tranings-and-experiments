package main

import "fmt"

func f1() {
	fmt.Println("This is f1() function")
}

func add(a int, b int) int {
	return a + b
}
func f2(a, b int) (int, string) {
	return a + b,
		"done"
}

func f3(a, b int) (s int) {
	s = a - b
	return
}

func varFunc(a ...int) {
	fmt.Printf("%T %#v\n", a, a)
}

func sumAndProduct(a ...float64) (float64, float64) {
	var sum float64 = 0
	var product float64 = 1
	for _, v := range a {
		sum += v
		product *= v
	}

	return float64(sum), float64(product)
}

func deferredFunction() {
	fmt.Println("This should be last")
}
func lastButOne() {
	fmt.Println("This is the last but one (FIFO)")
}

func increment(x int) func() int {
	return func() int {
		x++
		return x
	}
}

func main() {
	defer deferredFunction()
	f1()
	fmt.Println(add(1, 2))
	res, _ := f2(10, 15)
	fmt.Println(res)
	fmt.Println(f3(5, 1))
	defer lastButOne()

	varFunc(1, 2, 3)
	nums := []int{2, 3, 4}
	varFunc(nums...)

	s, p := sumAndProduct(2.0, 5., 10.)
	fmt.Println(s, p)

	func(msg string) { fmt.Println(msg) }("I am anonymous function!")
	a := increment(10)
	fmt.Printf("\n%T -> %v \n\n", a, a())
}
