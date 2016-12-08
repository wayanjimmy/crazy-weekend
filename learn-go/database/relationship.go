package main

import (
	"database/sql"
	"errors"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

type Post struct {
	Id       int64
	Content  string
	Author   string
	Comments []Comment
}

type Comment struct {
	Id      int64
	Content string
	Author  string
	Post    *Post
}

var Db *sql.DB

func init() {
	var err error
	Db, err = sql.Open("mysql", "root:@/gwp")
	if err != nil {
		panic(err)
	}
}

func (comment *Comment) Create() (err error) {
	if comment.Post == nil {
		err = errors.New("Post not found")
		return
	}
	stmt, err := Db.Prepare("insert into comments (content, author, post_id) values (?, ?, ?)")
	res, err := stmt.Exec(comment.Content, comment.Author, comment.Post.Id)
	comment.Id, err = res.LastInsertId()
	return
}

func GetPost(id int) (post Post, err error) {
	post = Post{}
	post.Comments = []Comment{}
	err = Db.QueryRow("select id, content, author from posts where id = $1", id).Scan(&post.Id, &post.Content, &post.Author)
	rows, err := Db.Query("select id, content, author from comments")
	if err != nil {
		return
	}
	defer rows.Close()
	for rows.Next() {
		comment := Comment{Post: &post}
		err = rows.Scan(&comment.Id, &comment.Content, &comment.Author)
		if err != nil {
			return
		}
		post.Comments = append(post.Comments, comment)
	}
	return
}

func (post *Post) Create() (err error) {
	stmt, err := Db.Prepare("insert into posts (content, author) values (?, ?)")
	res, err := stmt.Exec(post.Content, post.Author)
	post.Id, err = res.LastInsertId()
	return
}

func main() {
	post := Post{Content: "Kentang gorent enak", Author: "Jimmy"}
	err := post.Create()
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(post)

	fmt.Println(post)

	comment := Comment{Content: "Iya enak banget bro", Author: "Jonru", Post: &post}
	comment.Create()

	fmt.Println(comment)
}
