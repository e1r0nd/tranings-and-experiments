package main

import (
	"fmt"
	"strings"
	"unicode/utf8"
)

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

	// Rune
	fmt.Printf("\n" + strings.Repeat("#", 20) + "\n")
	sss := "mąż"
	for i := 0; i < len(sss); {
		r, size := utf8.DecodeRuneInString(sss[i:])
		fmt.Printf("%c", r)
		i += size
	}
	fmt.Printf("\n" + strings.Repeat("#", 20) + "\n")
	for _, r := range sss {
		fmt.Printf("%c", r)
	}
	fmt.Printf("\n")
	fmt.Println("Bytes length in sss:", len(sss))
	fmt.Println("Runes length in sss:", utf8.RuneCountInString(sss))
}
