package main

import "fmt"

type number struct {
	f float32
}

type nr number

func main() {
	b := nr{5.0}

	var c = number(b)
	fmt.Println(c)
}
