package main

import "fmt"

type contactInfo struct {
	email   string
	zipCode int
}

type person struct {
	firstName string
	lastName  string
	contact   contactInfo
}

type km float64
type mile float64

func main() {
	alex := person{"Alex", "Anderson", contactInfo{"", 0}}
	alex.print()
	sonic := person{firstName: "Sonic", lastName: "Egghead",
		contact: contactInfo{
			email:   "some@mail.com",
			zipCode: 10001,
		}}
	sonic.updateName("Robotnik")
	sonic.print()

	var ustas person
	ustas.firstName = "Ustas"
	ustas.lastName = "Nemo"
	fmt.Printf("\n%v %v\n", ustas.firstName, ustas.lastName)
	fmt.Printf("---\n%+v\n", ustas)

	// Anonymous struct
	diana := struct {
		firstName, lastName string
		age                 int
	}{
		firstName: "Diana",
		lastName:  "Mueller",
		age:       30,
	}
	fmt.Println(diana)

	// types
	var parisToLondon km = 465
	var distanceInMile mile

	distanceInMile = mile(parisToLondon) / 0.621
	fmt.Println("\nmile:", distanceInMile)

	if true {
		fmt.Println("TRUE")
	}
}

func (p person) print() {
	fmt.Printf("%+v", p)
}

func (p *person) updateName(newFirstName string) {
	p.firstName = newFirstName
}
