package main

import "fmt"

func main() {
	vals := make([]int, 5)
	for i := 0; i < 5; i++ {
		vals = append(vals, i)
	}
	fmt.Println(vals)
}
