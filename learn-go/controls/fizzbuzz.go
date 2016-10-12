package main

import "fmt"

func main() {
	for i := 1; i <= 100; i++ {
		switch {
		case i % 3 == 0:
			fmt.Printf("Fizz\n")
		case i % 5 == 0:
			fmt.Printf("Buzz\n")
		case i % 3 == 0 && i % 5 == 0:
			fmt.Printf("FizzBuzz\n")
		default: fmt.Printf("%d\n", i)
		}
	}
}
