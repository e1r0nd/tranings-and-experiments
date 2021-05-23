package main

import "fmt"

func main() {
	cards := newDeck()
	cards.saveToFile("my_cards")

	cards = newDeckFromFile("my_cards")

	fmt.Println("Before:", cards.toString())
	cards.shuffle()
	fmt.Println("After:", cards.toString())
}
