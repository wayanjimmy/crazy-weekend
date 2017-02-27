package main

import (
	"log"

	"github.com/tucnak/telebot"
)

type Channel struct {
	Name string
}

func (o Channel) Destination() string {
	return o.Name
}

func main() {
	bot, err := telebot.NewBot("345064376:AAE940SaEQOxxVAhEnm5NXq06Y7l_KeoLh4")
	if err != nil {
		log.Fatalln(err)
	}

	c := telebot.C

	boom, err := telebot.NewFile("/Users/jimboy/Code/prinzio_backup_db/bu_prinzio_staging_1487400136.sql.tar.gz")
	if err != nil {
		log.Fatalln(err)
	}

	file := telebot.Document{File: boom}

	_ = bot.SendDocument(c, &file, nil)
}
