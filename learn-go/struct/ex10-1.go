package main

import (
	"fmt"
	"time"
)

type Address struct {
	address string
}

type VCard struct {
	name      string
	birthDate time.Time
	photo     string
	address1  *Address
	address2  *Address
}

func main() {
	var vc1 VCard
	vc1.name = "Jimmy"
	vc1.birthDate = time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC)
	vc1.photo = "ava.png"
	vc1.address1 = &Address{"Jl. Pekandelan No.43e"}
	vc1.address2 = &Address{"Samping jalan"}

	fmt.Println(vc1.address1)
}
