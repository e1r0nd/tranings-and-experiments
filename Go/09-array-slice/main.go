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

	// compare slices
	eq := true
	s1, s2, s3 := []int{1, 2, 3}, []int{1}, []int{2, 3}
	s2 = append(s2, s3...)
	for i, valueS1 := range s1 {
		if valueS1 != s2[i] {
			eq = false
			break
		}
	}
	if len(s1) != len(s2) {
		eq = false
	}
	fmt.Printf("%v; %v -> ", s1, s2)
	fmt.Println("The are equal?", eq)

	// array slice
	arr1 := [5]int{1, 2, -1, -5, 0} // array
	slice1 := arr1[1:3]             // array[start:stop] start - include, stop - exclude
	fmt.Printf("%v, %T\n", slice1, slice1)
	slice2 := arr1[:4] // from the beginning
	slice3 := arr1[:]  // copy
	slice3 = append(slice3, 100)
	fmt.Printf("%v, %v\n", slice2, slice3)

	// Modify the original array
	sl1 := []int{10, 20, 30, 40} // slice
	sl2, sl3 := sl1[:], sl1[:]
	sl3[1] = 600 // this modifies the original array
	fmt.Printf("sl1:%v, sl2:%v, sl3:%v\n", sl1, sl2, sl3)
}
