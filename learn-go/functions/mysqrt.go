package main

import (
	"fmt"
	"math"
	"errors"
)

func main() {
	result, err := MySqrt(16)

	if err != nil {
		fmt.Printf("keleee")
	} else {
		fmt.Println(result)
	}
}

func MySqrt(input float64) (float64, error) {
	if (input < 0) {
		return 0, errors.New("math: square root of negative number")
	}
	return math.Sqrt(input), nil
}
