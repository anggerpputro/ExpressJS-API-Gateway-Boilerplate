const bcrypt = require("bcryptjs");

const db = require("../db");
const user = require("../models/User");

const tableName = user.getTable();

const create = ({ username, password }) => {
	let hashedPassword = bcrypt.hashSync(password, 8);

	return db(tableName).insert({
		username: username,
		password: hashedPassword
	});
};

const getById = (userid, showPassword = false) => {
	const query = db(tableName).where("id", userid);
	if (showPassword) {
		return query.first("id", "username", "password");
	} else {
		return query.first("id", "username");
	}
};

const getByUsername = (username, showPassword = false) => {
	const query = db(tableName).where("username", username);
	if (showPassword) {
		return query.first("id", "username", "password");
	} else {
		return query.first("id", "username");
	}
};

module.exports = {
	create,
	getById,
	getByUsername
};
