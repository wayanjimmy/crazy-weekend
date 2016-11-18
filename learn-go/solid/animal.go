package main

import "fmt"

type Animal interface {
	Name() string
}

type Dog struct{}

type Human struct{}

type GuideDog struct {
	*Dog
}

func (d *Dog) Name() string {
	return "Dog"
}

func (d *Dog) Bark() {
	fmt.Println("Woof")
}

func (gd *GuideDog) Help(h *Human) {
	fmt.Printf("Hey human, grab %s's leash!\n", gd.Name())
}

func main() {
	var animal Animal
	animal = &Dog{}
	fmt.Println(animal.Name())

	gd := &GuideDog{}
	gd.Help(nil)
}
