## Create Table

- `\c postgres` 

```postgres
CREATE TABLE Passengers (pclass text, survived boolean, name text, sex text, age decimal, sibsp text, parch text, ticket text, fare decimal, cabin text, embarked text, boat text, body text, home_dest text)
```


## import .CSV to Postgres

There is a .csv attached to the repository, where all the data is available. You have to import it to Postgres:

```
COPY Passengers (pclass, survived, name, sex, age, sibsp, parch, ticket, fare, cabin, embarked, boat, body, home_dest) FROM '%ruta%\titanicProject\titanic.csv' DELIMITER ',' CSV HEADER;
```

## Edit to make it work 🙌🏼

` server > db.js`

```postgres
const pool = new Pool({
    user: ("YOUR_USER"),
    password:("YOUR_PASSWORD"),
    host: "localhost",
    port: 5432,
    database: "titanic"

})
```
