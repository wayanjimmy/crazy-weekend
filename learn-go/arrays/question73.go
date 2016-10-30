package main

import "fmt"

func main() {
	s := make([]byte, 5)

	fmt.Printf("The length of s is %d\n", len(s))
	fmt.Printf("The capacity of s is %d\n", cap(s))

	s = s[2:4]

	fmt.Printf("The length of s is %d\n", len(s))
	fmt.Printf("The capacity of s is %d\n", cap(s))
}
