var express = require("express");
var router = express.Router();

const authMiddleware = require("../../middleware/Authenticate");

const apiAdapter = require("../apiAdapter");
const BASE_URL = "http://localhost:8089";
const api = apiAdapter(BASE_URL);

router.get("/", (req, res) => {
	res.send("HASHTAG");
});

router.get("/:name", (req, res) => {
	api.get(req.path).then(resp => {
		res.send(resp.data);
	});
});

module.exports = router;
