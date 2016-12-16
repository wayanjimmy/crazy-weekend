package main

import (
	"fmt"
	"strings"
)

type Person struct {
	firstName string
	lastName  string
}

func upPerson(p Person) {
	p.firstName = strings.ToUpper(p.firstName)
	p.lastName = strings.ToUpper(p.lastName)
}

func main() {
	var pers1 Person
	pers1.lastName = "Jimmy"
	pers1.firstName = "Gunawan"
	upPerson(pers1)
	fmt.Printf("The name of the person is %s %s\n", pers1.firstName, pers1.lastName)
}
