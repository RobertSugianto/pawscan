package userModel

import (
	"pawscan/config"
	"pawscan/entities"
)

func GetUserByEmail(email string) (*entities.MsUser, error) {
	var user entities.MsUser
	err := config.DB.QueryRow("SELECT UserID, UserName, UserPassword FROM MsUser WHERE UserEmail = $1", email).
		Scan(&user.Id, &user.Name, &user.Password)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func GetUserById(userID uint) entities.MsUser {
	var user entities.MsUser
	err := config.DB.QueryRow("Select UserID, UserName, UserEmail, UserPassword FROM MsUser WHERE UserID = $1", userID).
		Scan(&user.Id, &user.Name, &user.Email, &user.Password)
	if err != nil {
		panic(err)
	}

	return user
}
