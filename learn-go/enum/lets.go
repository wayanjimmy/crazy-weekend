package main

import "fmt"

const (
	SUNDAY = iota
	MONDAY
	TUESDAY
	WEDNESDAY
	THURSDAY
	FRIDAY
	SATURDAY
)

func main() {
	fmt.Println(SUNDAY)
	fmt.Println(SATURDAY)
}
