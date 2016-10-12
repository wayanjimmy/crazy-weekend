package main

import "fmt"

func main() {
	for i := 0; i < 7; i++ {
		for j := 0; j <= i; j++ {
			fmt.Printf("G")
		}
		fmt.Println()
	}
}
