const userRepo = require.main.require("./repositories/UserRepository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = (username, password) => {
	return new Promise((resolve, reject) => {
		userRepo
			.create({
				username: username,
				password: password
			})
			.then(userid => userRepo.getById(userid))
			.then(user => {
				const token = jwt.sign(
					{ id: user.id },
					process.env.JWT_SECRET,
					{
						expiresIn: 86400
					}
				);

				resolve({
					auth: true,
					token: token,
					user: user
				});
			})
			.catch(err => {
				reject(err);
			});
	});
};

const login = (username, password) => {
	return new Promise((resolve, reject) => {
		userRepo
			.getByUsername(username, true)
			.then(result => {
				if (!result) reject(new Error("User not found"));

				const user = result;

				const passwordIsValid = bcrypt.compareSync(
					password,
					user.password
				);
				if (!passwordIsValid) reject(new Error("Invalid Password!"));

				const token = jwt.sign(
					{ id: user.id },
					process.env.JWT_SECRET,
					{
						expiresIn: 86400
					}
				);

				resolve({ auth: true, token: token });
			})
			.catch(err => {
				reject(err);
			});
	});
};

module.exports = {
	register,
	login
};
