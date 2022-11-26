const Pool = require("pg").Pool;

const pool = new Pool({
    user: "donaedhelwen",
    password: "test123",
    host: "localhost",
    port: 5432,
    database: "titanic"

})

module.exports = pool; 