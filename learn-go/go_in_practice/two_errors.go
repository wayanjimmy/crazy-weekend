package main

import (
	"errors"
	"fmt"
	"math/rand"
)

var ErrTimeout = errors.New("The request timed out")
var ErrRejected = errors.New("The request was rejected")

var random = rand.New(rand.NewSource(34))

func main() {
	response, err := SendRequest("Hello")
	for err == ErrTimeout {
		fmt.Println("Timeout. Retrying.")
		response, err = SendRequest("Hello")
	}
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(response)
	}
}

// SendRequest is trying to send requesrequestt
func SendRequest(req string) (string, error) {
	fmt.Println(random.Int() % 3)
	switch random.Int() % 3 {
	case 0:
		return "Success", nil
	case 1:
		return "", ErrRejected
	default:
		return "", ErrTimeout
	}
}
