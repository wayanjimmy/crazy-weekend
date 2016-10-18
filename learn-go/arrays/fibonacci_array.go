package main

import "fmt"

func main() {
	var a [50]int

	for i := range a {
		if i == 0 || i == 1 {
			a[i] = 1
		} else {
			a[i] = a[i-1] + a[i-2]
		}
	}

	fmt.Println(a)
}
