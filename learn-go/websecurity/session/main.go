package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gorilla/sessions"
)

var (
	key   = []byte("super-secret-key")
	store = sessions.NewCookieStore(key)

	users = map[string]string{
		"alice": "password",
		"bob":   "hunter2",
	}

	balances = map[string]int{
		"alice": 100,
		"bob":   200,
	}
)

type loginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		fmt.Fprint(w, "Method not allowed", http.StatusMethodNotAllowed)
		return

	}

	var credentials loginRequest

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "error parsing request", http.StatusBadRequest)
		return
	}

	err = json.Unmarshal(body, &credentials)
	if err != nil {
		http.Error(w, "json not valid", http.StatusBadRequest)
		return
	}

	if password, ok := users[credentials.Username]; ok {
		username := credentials.Username
		if password == credentials.Password {
			if balance, ok := balances[username]; ok {
				fmt.Fprintf(w, "Hi %s, your balance = %d", username, balance)
				return
			}
		}
	}

	http.Error(w, "forbidden", http.StatusForbidden)
	return

}

func handler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		fmt.Fprint(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var (
		username string
		balance  int
	)

	session, _ := store.Get(r, "auth")

	if username, ok := session.Values["username"].(string); !ok || username == "" {
		http.Error(w, "forbidden", http.StatusForbidden)
		return
	}

	if v, ok := balances[username]; ok {
		balance = v
		http.Error(w, "something went wrong", http.StatusInternalServerError)
	}

	fmt.Fprintf(w, "Balance: %d", balance)
}

func main() {
	http.HandleFunc("/", handler)
	http.HandleFunc("/login", loginHandler)
	log.Fatal(http.ListenAndServe(":3000", nil))
}
