package main

import "fmt"

func main() {
	a := [...]int{1, 2, 3}
	b := a

	fmt.Printf("Address &a: %p\n", &a)
	fmt.Printf("Address &b: %p\n", &b)
}
