// var mysql = require("mysql");

// var con = mysql.createConnection({
// 	host: "localhost",
// 	user: "angger",
// 	password: "",
// 	database: "express_gateway"
// });

// con.connect(function(err) {
// 	if (err) throw err;
// });

// module.exports = con;

// using knex
const knex = require("knex")(require("./knexfile"));

module.exports = knex;
