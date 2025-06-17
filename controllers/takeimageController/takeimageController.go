package takeimageController

import (
	"net/http"
	"pawscan/entities"
	"pawscan/session"
	"text/template"
)

func Index(w http.ResponseWriter, r *http.Request) {
	sess, err := session.Store.Get(r, session.SessionName)
    if err != nil {
        http.Error(w, "Internal Server Error", http.StatusInternalServerError)
        return
    }

    userID, ok := sess.Values["userID"]
    if !ok || userID == nil {
        http.Redirect(w, r, "/login", http.StatusSeeOther)
        return
    }

    user := entities.MsUser{
        Id:   sess.Values["userID"].(uint),
        Name: sess.Values["userName"].(string),
    }

    tmpl, err := template.ParseFiles("views/Takeimage/index.html")
    if err != nil {
        http.Error(w, "Template error", http.StatusInternalServerError)
        return
    }

    tmpl.Execute(w, user)
}

