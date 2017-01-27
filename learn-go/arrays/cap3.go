package main

import "fmt"

func main() {
	var vals []int
	for i := 0; i < 5; i++ {
		vals = append(vals, i)
		fmt.Println("The length of our slices is ", len(vals))
		fmt.Println("The capacity of our slices is ", cap(vals))
	}

	vals = append(vals, 123)
	fmt.Println("The length of our slices is ", len(vals))
	fmt.Println("The capacity of our slices is ", cap(vals))

	fmt.Println(vals[5])
	fmt.Println(vals[2])
}
