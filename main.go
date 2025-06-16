package main

import (
	"log"
	"net/http"
	"pawscan/config"
	"pawscan/controllers/homeController"
	"pawscan/controllers/landingPageController"
	"pawscan/controllers/loginController"
	"pawscan/controllers/signinController"
	"pawscan/session"

	"github.com/gorilla/sessions"
)

func main() {
	session.Store = sessions.NewCookieStore([]byte("super-secret-key"))
	session.SessionName = "pawscan-session"

	config.ConnectDB()
	log.Println("Connection is established, continue to opening port")

	// 1. Landing Page
	http.HandleFunc("/", landingPageController.Welcome)

	// 2. Login Page
	http.HandleFunc("/login", loginController.Index)
	http.HandleFunc("/checklogin", loginController.CheckLogin)

	// 3. Signin Page
	http.HandleFunc("/signin", signinController.Index)

	// 4. home Page
	http.HandleFunc("/home", homeController.Index)


	// handle css and js
	http.Handle("/views/", http.StripPrefix("/views/", http.FileServer(http.Dir("views"))))

	log.Println("Server running on http://localhost:8080")
	log.Println("Other url can be found on http://127.0.0.1:8080")
	http.ListenAndServe(":8080", nil)
}