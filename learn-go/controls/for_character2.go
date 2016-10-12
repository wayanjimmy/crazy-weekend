package main

import (
	"fmt"
	"strings"
)

const G = "G"

func main() {
	for i := 1; i <= 7; i++ {
		output := strings.Repeat(G, i)
		fmt.Println(output)
	}
}
