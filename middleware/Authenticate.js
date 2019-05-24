const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	if (!req.headers["authorization"]) {
		res.status(401).send("Unauthorized");
	} else {
		jwt.verify(
			req.headers["authorization"],
			process.env.JWT_SECRET,
			(err, decoded) => {
				if (err) {
					// res.status(403).send("Forbidden");
					res.status(400).send("Invalid Token");
				} else {
					next();
				}
			}
		);
	}
};
