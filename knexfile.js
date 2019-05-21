const config = require("config");

module.exports = {
	client: config.get("db.type"),
	connection: {
		host: config.get("db.host"),
		user: config.get("db.user"),
		password: config.get("db.password"),
		database: config.get("db.db_name")
	}
};
