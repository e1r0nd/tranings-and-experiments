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
}

func (p person) print() {
	fmt.Printf("%+v", p)
}

func (p *person) updateName(newFirstName string) {
	p.firstName = newFirstName
}
