var mysql = require("mysql");

var con = mysql.createConnection({
	host: "localhost",
	user: "angger",
	password: "",
	database: "express_gateway"
});

con.connect(function(err) {
	if (err) throw err;
});

module.exports = con;
