var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
	res.send("Simple API Gateway");
});

module.exports = router;
