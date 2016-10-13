package main

import "fmt"

func main() {
	fmt.Printf("Multiply 2 * 5 * 6 = %d\n", Multiply3Nums(2, 5, 6))
}

func Multiply3Nums(a int, b int, c int) int {
	return a * b * c
}
