// database connection configuration code
const Pool = require("pg").Pool;

console.log("db")

const db = new Pool({
    user: "postgres",
    host: "localhost",
    database: "pizzaDB",
    password: "root",
    port: 5432
});
//console.log(db)
module.exports = db;