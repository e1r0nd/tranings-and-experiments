package main

func main() {
	cards := deck{newCard(), "New One"}
	cards = append(cards, "One more")
	cards.print()
}

func newCard() string {
	return "New Card"
}
