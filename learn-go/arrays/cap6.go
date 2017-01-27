package main

import "fmt"

func main() {
	fmt.Println(keys(map[string]struct{}{
		"dog":      struct{}{},
		"cat":      struct{}{},
		"mouse":    struct{}{},
		"wolf":     struct{}{},
		"elephant": struct{}{},
		"buffalo":  struct{}{},
	}))
}

func keys(m map[string]struct{}) []string {
	var ret []string
	fmt.Println(cap(ret))
	for key := range m {
		ret = append(ret, key)
		fmt.Println(cap(ret))
	}
	return ret
}
