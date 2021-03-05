# Backend made with AdonisJS to provide auth for frontend

## Getting Started

Clone the project repository by running the command below

```
git clone https://github.com/alexfrenkel92/puzzlengo-backend.git
```

## Setup

Run the command below to install dependencies

```
npm install
```

### Environment variables

Duplicate `.env.example` and rename it `.env`


### Migrations

Setup your database and enter the following in `.env`

```
DB_CONNECTION=mysql
DB_HOST=localhost
DB_DATABASE=adonis-tasks
DB_USER=root
DB_PASSWORD=
```

Run the following command to run migration.

```
adonis migration:run
```

Run the following command to generate APP_KEY.

```
adonis key:generate
```

Finally, start the application:

```
adonis serve --dev
```

OR

```
npm start
```
