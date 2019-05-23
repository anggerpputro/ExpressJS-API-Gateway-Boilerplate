const Sequelize = require("sequelize");
const db = require.main.require("./db");

const tableName = "users";

const User = db.define(
	tableName,
	{
		// attributes
		username: {
			type: Sequelize.STRING,
			allowNull: false
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		}
	},
	{
		// options
	}
);

module.exports = User;
