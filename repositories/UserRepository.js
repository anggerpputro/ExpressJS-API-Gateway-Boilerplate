const bcrypt = require("bcryptjs");

const db = require("../db");
const user = require("../models/User");

const create = function({ username, password }) {
	let hashedPassword = bcrypt.hashSync(password, 8);

	console.log(
		`Add user ${username} with password ${password}(${hashedPassword}) to :> ${user.getTable()}`
	);
	return db(user.getTable())
		.returning(["id", "username"])
		.insert({
			username: username,
			password: hashedPassword
		});
};

const getById = function(userid, showPassword = false) {
	const query = db(user.getTable()).where("id", userid);
	if (showPassword) {
		return query.first("id", "username", "password");
	} else {
		return query.first("id", "username");
	}
};

const getByUsername = function(username, showPassword = false) {
	const query = db(user.getTable()).where("username", username);
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
