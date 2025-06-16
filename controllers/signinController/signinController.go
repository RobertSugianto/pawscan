package signinController

import (
	"net/http"
	"text/template"
)

func Index(w http.ResponseWriter, r *http.Request) {
	temp, err := template.ParseFiles("views/Signin/index.html")
	if err != nil {
		panic(err)
	}

	temp.Execute(w, nil)
}