package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	bio := bufio.NewReader(os.Stdin)
	line, hasMoreInLine, err := bio.ReadLine()
	if err != nil {
		panic(err)
	}

	fmt.Println(line, hasMoreInLine)
}
