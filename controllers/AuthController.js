const authService = require.main.require("./services/AuthService");

const register = (req, res) => {
	if (req.body.username && req.body.password) {
		authService
			.register(req.body.username, req.body.password)
			.then(result => res.status(200).send(result))
			.catch(err => {
				console.error(err);
				return res.status(500).send("Registration failed");
			});
	} else {
		console.error(req.body);
		return res.status(400).send("Invalid Syntax");
	}
};

const login = (req, res) => {
	if (req.body.username && req.body.password) {
		const username = req.body.username;
		const password = req.body.password;

		authService
			.login(username, password)
			.then(result => res.status(200).send(result))
			.catch(err => {
				console.error(err);
				return res.status(400).send(err.message);
			});
	} else {
		console.error(req.body);
		return res.status(400).send("Invalid Syntax");
	}
};

module.exports = {
	register,
	login
};
