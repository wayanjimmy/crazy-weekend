package main

import (
	"os"

	"github.com/wayanjimmy/go-grab-xkcdi/grabxkcd"
)

func main() {
	os.Exit(grabxkcd.CLI(os.Args[1:]))
}
