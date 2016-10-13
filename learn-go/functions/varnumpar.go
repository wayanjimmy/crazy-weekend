package main

import "fmt"

func main() {
	x := Min(1, 2, 3, 4)
	fmt.Printf("The minimum is: %d\n", x)
	arr := []int{7, 5, 3, 9, 4}
	x = Min(arr...)
	fmt.Printf("The minimum in the array arr is: %d\n", x)
}

func Min(a ...int) int {
	if len(a) == 0 {
		return 0
	}

	min := a[0]
	for _, v := range a {
		if v < min {
			min = v
		}
	}
	return min
}
