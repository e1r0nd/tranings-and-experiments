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
}

func printMap(c map[string]string) {
	for color, hex := range c {
		fmt.Println("COLOR:", color, "HEX:", hex)
	}
}
