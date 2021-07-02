package main

import (
	"fmt"
	"time"
)

type bot interface {
	getGreeting(string) string
}

type englishBot struct{}
type spanishBot struct{}

// ************
type names []string

func (n names) print() {
	for i, name := range n {
		fmt.Println(i, name)
	}
}

/* Car structure
brand string - Brand name
price int - Car's price
*/
type car struct {
	brand string
	price int
}

// Change a car by a pointer
func changeCar(c *car, newBrand string, newPrice int) {
	c.brand = newBrand
	c.price = newPrice
}

//Change a car by a method by a pointer
func (c *car) updateCarProperly(newBrand string, newPrice int) {
	(*c).brand = newBrand
	(*c).price = newPrice
}

// Change a car by a method
func (c *car) updateCar(newBrand string, newPrice int) {
	c.brand = newBrand
	c.price = newPrice
}

func main() {
	eb := englishBot{}
	sb := spanishBot{}

	printGreeting(eb)
	printGreeting(sb)

	// **********************
	fmt.Println("***")
	const day = 24 * time.Hour
	fmt.Printf("%T\n", day)
	seconds := day.Seconds()
	fmt.Printf("%T\n", seconds)
	fmt.Printf("Seconds in a day %v\n", seconds)

	friends := names{"Adam", "Eve"}
	friends.print()
	names.print(friends)

	myCar := car{"BMW", 2000}
	fmt.Println(myCar)
	changeCar(&myCar, "Audi", 5000) // change by a pointer
	fmt.Println(myCar)
	(&myCar).updateCar("Volga", 100) // change by a method with a pointer properly
	fmt.Println(myCar)
	myCar.updateCar("Tesla", 3000) // change by a method with a pointer shorthand
	fmt.Println(myCar)
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
