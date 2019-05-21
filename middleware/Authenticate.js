const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
	if (!req.headers["authorization"]) {
		res.status(401).send("Unauthorized");
	} else {
		jwt.verify(
			req.headers["authorization"],
			config.get("jwt.secret"),
			(err, decoded) => {
				if (err) {
					res.status(403).send("Forbidden");
				} else {
					next();
				}
			}
		);
	}
};
