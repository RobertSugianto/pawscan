package main

import (
	"log"
	"net/http"
	"pawscan/config"
	"pawscan/controllers/landingPageController"
)

func main() {
	config.ConnectDB()
	log.Println("Connection is established, continue to opening port")

	// 1. Landing Page
	http.HandleFunc("/", landingPageController.Welcome)


	// handle css and js
	http.Handle("/views/", http.StripPrefix("/views/", http.FileServer(http.Dir("views"))))

	log.Println("Server running on http://localhost:8080")
	log.Println("Other url can be found on http://127.0.0.1:8080")
	http.ListenAndServe(":8080", nil)
}