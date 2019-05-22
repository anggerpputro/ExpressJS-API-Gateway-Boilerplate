const debug = require("debug")("app:db");

const bcrypt = require("bcryptjs");

const db = require("../db");
const user = require("../models/User");

const tableName = user.getTable();

const create = ({ username, password }) => {
	let hashedPassword = bcrypt.hashSync(password, 8);

	debug(`UserRepository::create -> username: ${username}`);

	return db(tableName).insert({
		username: username,
		password: hashedPassword
	});
};

const getById = (userid, showPassword = false) => {
	debug(
		`UserRepository::getById -> userid: ${userid}, showPassword: ${showPassword}`
	);

	const query = db(tableName).where("id", userid);
	if (showPassword) {
		return query.first("id", "username", "password");
	} else {
		return query.first("id", "username");
	}
};

const getByUsername = (username, showPassword = false) => {
	debug(
		`UserRepository::getByUsername -> username: ${username}, showPassword: ${showPassword}`
	);

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
