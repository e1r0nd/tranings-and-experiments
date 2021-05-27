package main

import "fmt"

type bot interface {
	getGreeting(string) string
}

type englishBot struct{}
type spanishBot struct{}

func main() {
	eb := englishBot{}
	sb := spanishBot{}

	printGreeting(eb)
	printGreeting(sb)
}

func printGreeting(b bot) {
	fmt.Println(b.getGreeting("Sonic"))
}

func (englishBot) getGreeting(name string) string {
	return "Hi " + name + "!"
}

func (spanishBot) getGreeting(name string) string {
	return "Hola " + name + "!"
}
