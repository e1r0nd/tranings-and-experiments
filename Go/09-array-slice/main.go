package main

import "fmt"

func main() {
	var numbers [4]int

	fmt.Printf("%v\n", numbers)
	fmt.Printf("%#v\n", numbers)

	var a1 = [4]float32{}
	fmt.Printf("%#v\n", a1)

	var a2 = [3]int{-10, 1, 100}
	fmt.Printf("%#v\n", a2)

	//elipsis operator
	a5 := [...]int{1, 2, -10}
	fmt.Printf("%#v of len:%d\n", a5, len(a5))

	//multidimension
	a3 := [2][3]int{
		{1, 3, 9},
		{-10, -11},
	}
	fmt.Printf("%#v\n", a3)

	//keyed
	a4 := [4]int{
		1: 2,
		2: -10,
		3: 111,
	}
	fmt.Printf("%#v\n", a4)
}
