package main

import "fmt"

func main() {
	var vals [20]int
	for i := 0; i < 5; i++ {
		vals[i] = i * i
	}
	subsetLen := 5

	fmt.Println("The subset of our array has a length of: ", subsetLen)

	vals[subsetLen] = 123
	subsetLen++
	fmt.Println("The subset of our array has a length of: ", subsetLen)
}
