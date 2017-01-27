package main

import "fmt"

func main() {
	fmt.Println(keys(map[string]struct{}{
		"dog": struct{}{},
		"cat": struct{}{},
	}))
}

func keys(m map[string]struct{}) []string {
	ret := make([]string, 0, len(m))
	for key := range m {
		ret = append(ret, key)
	}
	return ret
}
