const debug = require("debug")("app:db");

const bcrypt = require("bcryptjs");

// const db = require.main.require("./db");
const User = require.main.require("./models/User");

const create = ({ username, password }) => {
	let hashedPassword = bcrypt.hashSync(password, 8);

	debug(`UserRepository::create -> username: ${username}`);

	return User.create({
		username: username,
		password: hashedPassword
	});
};

const getById = (userid, showPassword = false) => {
	debug(
		`UserRepository::getById -> userid: ${userid}, showPassword: ${showPassword}`
	);

	let attributes = ["id", "username"];
	if (showPassword) {
		attributes = ["id", "username", "password"];
	}
	return User.findOne({
		where: { id: userid },
		attributes: attributes
	});
};

const getByUsername = (username, showPassword = false) => {
	debug(
		`UserRepository::getByUsername -> username: ${username}, showPassword: ${showPassword}`
	);

	let attributes = ["id", "username"];
	if (showPassword) {
		attributes = ["id", "username", "password"];
	}
	return User.findOne({
		where: { username: username },
		attributes: attributes
	});
};

module.exports = {
	create,
	getById,
	getByUsername
};
