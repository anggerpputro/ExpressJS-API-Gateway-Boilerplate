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

// // using knex
// const knex = require("knex")(require("./knexfile"));

// debug("Connected to database...");

// module.exports = knex;

const debug = require("debug")("app:db");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASS,
	{
		host: process.env.DB_HOST,
		dialect: process.env.DB_TYPE
	}
);

sequelize
	.authenticate()
	.then(() => {
		debug("Connection to database has been established successfully.");
	})
	.catch(err => {
		console.error("Unable to connect to the database:", err);
	});

module.exports = sequelize;
