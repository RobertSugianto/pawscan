# Foreword
This website was our final project on Software Engineering course. We create this website to predict dog breed around the world. This website can be used by downloading to local.
This website runs on vanilla HTML, CSS, and JS as the front-end, Golang as the backend, and python as the prediction server.

# Our Team:
1. Gianina Clairine
2. Hernando Tan
3. Ignatius Abraham Aristo Kusnadi
4. Sri Wahyuni
5. Robert Jefferson Sugianto

# Requirements
> To use this website, you must install or pull this repository to your local pc. Upon installing, you must already have this requirements
## Software Requirements
1. Golang
2. Python
3. Postgresql
## Library Requirements
### Golang
1. database/sql and github.com/lib/pq
2. gorilla sessions
3. text/template
4. godotenv
### Python
1. flask
2. PIL
3. pytorch
4. img2vec_pytorch

# Run Tutorial
To run this website, you need to copy the data dump into postgresql server then add .env to your local repository and inside must have this \
DB_HOST=localhost \
DB_PORT=5432 \
DB_USER= [your_postgres_user] \
DB_PASSWORD=[your_postgress_password] \
DB_NAME=pawscan \
\
SESSION_SECRET= [create_session_secret_password] \
\
after adding .env, you must run go and python in terminal by writing
1. go run main.go (in one terminal)
2. python ai/predict.py (in another teminal)