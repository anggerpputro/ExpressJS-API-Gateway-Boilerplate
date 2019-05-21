var express = require("express");
var router = express.Router();
const apiAdapter = require("./apiAdapter");

const BASE_URL = "http://localhost:8088";
const api = apiAdapter(BASE_URL);

router.get("/feeds", (req, res) => {
	// api.get(req.path)
	// 	.then(resp => {
	// 		res.send(resp.data);
	// 	})
	// 	.catch(error => {
	// 		// if (error.response) {
	// 		// 	// The request was made and the server responded with a status code
	// 		// 	// that falls out of the range of 2xx
	// 		// 	// console.log(error.response.data);
	// 		// 	// console.log(error.response.status);
	// 		// 	// console.log(error.response.headers);
	// 		// 	res.status(error.response.status).send(error.response.data);
	// 		// } else if (error.request) {
	// 		// 	// The request was made but no response was received
	// 		// 	// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
	// 		// 	// http.ClientRequest in node.js
	// 		// 	// console.log(error.request);
	// 		// 	res.status(500).send(error.request);
	// 		// } else {
	// 		// 	// Something happened in setting up the request that triggered an Error
	// 		// 	// console.log("Error", error.message);
	// 		// 	res.status(500).send(error.message);
	// 		// }
	// 		// throw new Error("BROKEN");
	// 		next(error);
	// 	});
	res.send("FEEDS");
});

router.get("/feeds/:hashtag", (req, res) => {
	api.get(req.path).then(resp => {
		res.send(resp.data);
	});
});

router.post("/feeds", (req, res) => {
	// api.get(req.path).then(resp => {
	// 	res.send(resp.data);
	// });
	res.send("FEEDS");
});

module.exports = router;
