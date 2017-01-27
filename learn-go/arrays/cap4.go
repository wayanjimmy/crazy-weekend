package main

import "fmt"

func main() {
	fmt.Println(keys(map[string]struct{}{
		"dog": struct{}{},
		"cat": struct{}{},
	}))
}

func keys(m map[string]struct{}) []string {
	ret := make([]string, len(m))
	i := 0
	for key := range m {
		ret[i] = key
		i++
	}
	return ret
}
