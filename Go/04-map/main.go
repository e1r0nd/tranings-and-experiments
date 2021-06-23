package main

import "fmt"

func main() {
	colors := map[string]string{
		"red":   "#ff0000",
		"green": "#00ff00",
	}
	fmt.Println(colors)

	var hex map[string]string
	fmt.Println(hex)

	hexColors := make(map[string]string)
	hexColors["white"] = "#ffffff"
	hexColors["black"] = "#000000"
	delete(hexColors, "black")
	fmt.Println(hexColors)

	printMap(colors)

	fmt.Println("---")
	var employees map[string]string
	fmt.Printf("Employees: %#v\n", employees)
	fmt.Printf("No of employees: %d\n", len(employees))

	people := map[int]string{1: "Dan", 2: "Rob"}
	people[3] = "Marry"
	fmt.Printf("People: %v\n", people)

	// comma ok idiom
	p, ok := people[4]
	if ok {
		fmt.Printf("Person: %v", p)
	} else {
		fmt.Println("No 'John' is found")
	}

	// iterator
	for k, v := range people {
		fmt.Printf("key: %v, value: %v;", k, v)
	}
	fmt.Println("\n---")
}

func printMap(c map[string]string) {
	for color, hex := range c {
		fmt.Println("COLOR:", color, "HEX:", hex)
	}
}
