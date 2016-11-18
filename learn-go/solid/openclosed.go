package main

import "fmt"

type A struct {
	year int
}

func (a A) Greet() {
	fmt.Println("Hello GolangUK", a.year)
}

type B struct {
	A
}

func (b B) Greet() {
	fmt.Println("Welcome to GolangUK", b.year)
}

func main() {
	var a A
	a.year = 2016
	var b B
	b.year = 2016
	a.Greet()
	b.Greet()
}
