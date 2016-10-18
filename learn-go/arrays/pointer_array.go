package main

import "fmt"

func f(a [3]int) {
	fmt.Println(a)
}

func fp(a *[3]int) {
	fmt.Println(a)
}

func main() {
	var ar [3]int
	f(ar)
	fp(&ar)
}
