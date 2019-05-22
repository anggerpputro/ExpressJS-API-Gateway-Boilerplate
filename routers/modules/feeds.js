var express = require("express");
var router = express.Router();

const authMiddleware = require("../../middleware/Authenticate");

const apiAdapter = require("../apiAdapter");
const BASE_URL = "http://localhost:8088";
const api = apiAdapter(BASE_URL);

router.get("/", authMiddleware, (req, res) => {
	res.send("FEEDS");
});

router.get("/:hashtag", authMiddleware, (req, res) => {
	api.get(req.path).then(resp => {
		res.send(resp.data);
	});
});

router.post("/", authMiddleware, (req, res) => {
	// api.get(req.path).then(resp => {
	// 	res.send(resp.data);
	// });
	res.send("FEEDS");
});

module.exports = router;
