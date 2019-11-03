var mysql = require("mysql");

const db = mysql.createConnection({
    user: "root",
    password: "password",
    database: "SimpleStore",
    host: "localhost"
})

module.exports = db
