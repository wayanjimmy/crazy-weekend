package main

import "fmt"

func main() {
	items := [...]int{10, 20, 30, 40, 50}

	for _, item := range items {
		item *= 2
	}

	for ix, item := range items {
		fmt.Printf("Item in %d is: %d \n", ix, item)
	}
}
