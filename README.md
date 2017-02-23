# Описание задания
[Описание задания](task.md). Оригинал взят [отсюда](https://gist.github.com/geksilla/72a0cb882d2b7d8b4336)

### Getting Started
1. Clone this repository.
2. Run `npm install`.
3. Change config parameters:
  * Enter `etc` directory.
  * Create file 'config.json'.
  * Copy content from 'config.json.sample'.
  * Change 'config.json' to fit your needs.
4. Fill up database with data `npm run seed`. MongoDB installation is required.
5. Run server : `npm run server`.
4. Run webpack in development mode : `npm run devpack`.
5. Visit `localhost:8080` in your browser

### Heroku
1. Run `npm run build` to compile files.
2. Push them to heroku.

## REST API

| HTTP Method | URL           | Action                       |
| ------------|:-------------:| ----------------------------:|
| GET         | /api/books    | Retrieve all books           |
| GET         | /api/authors  | Retrieve all authors         |
| GET         | /api/genres   | Retrieve all genres          |
