const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const userRepo = require("../repositories/UserRepository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/register", (req, res) => {
	if (req.body.username && req.body.password) {
		userRepo
			.create({
				username: req.body.username,
				password: req.body.password
			})
			.then(userid => {
				userRepo.getById(userid).then(user => {
					const token = jwt.sign(
						{ id: userid },
						process.env.JWT_SECRET,
						{
							expiresIn: 86400
						}
					);

					res.status(200).send({
						auth: true,
						token: token,
						user: user
					});
				});
			})
			.catch(err => {
				console.error(err);
				return res.status(500).send("Registration failed");
			});
	} else {
		console.error(req.body);
		return res.status(400).send("Invalid Syntax");
	}
});

router.post("/login", (req, res) => {
	if (req.body.username && req.body.password) {
		const username = req.body.username;
		const password = req.body.password;
		userRepo
			.getByUsername(username, true)
			.then(result => {
				if (!result) return res.status(404).send("User not found");

				const user = result;

				const passwordIsValid = bcrypt.compareSync(
					password,
					user.password
				);
				if (!passwordIsValid)
					return res.status(401).send({ auth: false, token: null });

				const token = jwt.sign(
					{ id: user.id },
					process.env.JWT_SECRET,
					{
						expiresIn: 86400
					}
				);

				res.status(200).send({ auth: true, token: token });
			})
			.catch(err => {
				console.error(err);
				return res.status(500).send("Internal server error");
			});
	} else {
		console.error(req.body);
		return res.status(400).send("Invalid Syntax");
	}
});

module.exports = router;
