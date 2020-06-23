package grabxkcd

import (
	"fmt"
	"path"
	"time"
)

const LatestComic = 0

func BuildURL(comicNumber int) string {
	if comicNumber == LatestComic {
		return "https://xkcd.com/info.0.json"
	}

	return fmt.Sprintf("https://xkcd.com/%d/info.0.json", comicNumber)
}

type APIResponse struct {
	Month       string `json:"month"`
	Number      int    `json:"num"`
	Link        string `json:"link"`
	Year        string `json:"year"`
	News        string `json:"news"`
	SafeTitle   string `json:"safe_title"`
	Transcript  string `json:"transcript"`
	Description string `json:"alt"`
	Image       string `json:"img"`
	Title       string `json:"title"`
	Day         string `json:"day"`
}

func (ar APIResponse) Date() *time.Time {
	t, err := time.Parse("2006-1-2", fmt.Sprintf("%s-%s-%s", ar.Year, ar.Month, ar.Day))
	if err != nil {
		return nil
	}

	return &t
}

func (ar APIResponse) Filename() string {
	return path.Base(ar.Image)
}
