package client

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path"
	"path/filepath"
	"time"

	"github.com/wayanjimmy/go-grab-xkcd/model"
)

type ComicNumber int

const (
	BaseURL              string        = "https://xkcd.com"
	DefaultClientTimeout time.Duration = 30 * time.Second
	LatestComic          ComicNumber   = 0
)

type XKCDClient struct {
	client  *http.Client
	baseURL string
}

func NewXKCDClient() *XKCDClient {
	return &XKCDClient{
		client: &http.Client{
			Timeout: DefaultClientTimeout,
		},
		baseURL: BaseURL,
	}
}

func (hc *XKCDClient) SetTimeout(d time.Duration) {
	hc.client.Timeout = d
}

func (hc *XKCDClient) Fetch(n ComicNumber, save bool) (model.Comic, error) {
	resp, err := hc.client.Get(hc.buildURL(n))
	if err != nil {
		return model.Comic{}, err
	}
	defer resp.Body.Close()

	var comicResp model.ComicResponse
	if err := json.NewDecoder(resp.Body).Decode(&comicResp); err != nil {
		return model.Comic{}, err
	}

	if save {
		if err := hc.SaveToDisk(comicResp.Img, "."); err != nil {
			fmt.Println("Failed to save image!")
		}
	}

	return comicResp.Comic(), nil
}

func (hc *XKCDClient) SaveToDisk(url, savePath string) error {
	resp, err := http.Get(url)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	absSavePath, _ := filepath.Abs(savePath)
	filePath := fmt.Sprintf("%s/%s", absSavePath, path.Base(url))

	file, err := os.Create(filePath)
	if err != nil {
		return err
	}
	defer file.Close()

	_, err = io.Copy(file, resp.Body)
	if err != nil {
		return err
	}

	return nil
}

func (hc *XKCDClient) buildURL(n ComicNumber) string {
	if n == LatestComic {
		return fmt.Sprintf("%s/info.0.json", hc.baseURL)
	}

	return fmt.Sprintf("%s/%d/info.0.json", hc.baseURL, n)
}
