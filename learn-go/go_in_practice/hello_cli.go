package main

import (
	"fmt"
	"os"

	"gopkg.in/urfave/cli.v1"
)

func main() {
	app := cli.NewApp()
	app.Name = "hello_cli"
	app.Usage = "Print hello world"
	app.Flags = []cli.Flag{
		cli.StringFlag{
			Name:  "name, n",
			Value: "World",
			Usage: "Who to say hello to.",
		},
		cli.BoolFlag{
			Name:  "spanish, s",
			Usage: "Spanish",
		},
	}

	app.Action = func(c *cli.Context) error {
		name := c.GlobalString("name")
		spanish := c.GlobalBool("spanish")

		if spanish == true {
			fmt.Printf("Hola %s!\n", name)
		} else {
			fmt.Printf("Hello %s!\n", name)
		}
		return nil
	}

	app.Run(os.Args)
}
