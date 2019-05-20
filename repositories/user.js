const bcrypt = require("bcryptjs");

const db = require("../db");
const user = require("../models/user");

const create = function create({ username, password }) {
	let hashedPassword = bcrypt.hashSync(password, 8);

	console.log(
		`Add user ${username} with password ${password}(${hashedPassword}) to :> ${user.getTable()}`
	);
	return db(user.getTable())
		.returning("id")
		.insert({
			username: username,
			password: hashedPassword
		});
};

module.exports = {
	create
};
