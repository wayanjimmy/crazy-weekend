package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func getPlayer1Coordinate(a [3][3]int) (x, y int) {
	for i, row := range a {
		for j, col := range row {
			if col == 1 {
				return i, j
			}
		}
	}
	return 0, 0
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	var a [3][3]int
	var x2, y2 int

	for i := 0; i < 3; i++ {
		scanner.Scan()

		lineBuffer := scanner.Text()
		line := strings.Split(lineBuffer, " ")

		for j, v := range line {
			a[i][j], _ = strconv.Atoi(v)
		}
	}

	x1, y1 := getPlayer1Coordinate(a)

	if x1 == 2 {
		x2 = 1
	} else {
		x2 = x1 + 1
	}

	if y1 == 2 {
		y2 = 1
	} else {
		y2 = y1 + 1
	}

	fmt.Println(x2, y2)
}
