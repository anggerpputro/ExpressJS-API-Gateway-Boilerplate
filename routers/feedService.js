var express = require("express");
var router = express.Router();
const apiAdapter = require("./apiAdapter");
const authMiddleware = require("../middleware/Authenticate");

const BASE_URL = "http://localhost:8088";
const api = apiAdapter(BASE_URL);

router.get("/feeds", authMiddleware, (req, res) => {
	res.send("FEEDS");
});

router.get("/feeds/:hashtag", authMiddleware, (req, res) => {
	api.get(req.path).then(resp => {
		res.send(resp.data);
	});
});

router.post("/feeds", authMiddleware, (req, res) => {
	// api.get(req.path).then(resp => {
	// 	res.send(resp.data);
	// });
	res.send("FEEDS");
});

module.exports = router;
