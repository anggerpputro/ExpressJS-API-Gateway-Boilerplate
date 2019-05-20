const express = require("express");
const app = express();
const router = require("./routers/router");
const bodyParser = require("body-parser");

const userRepo = require("./repositories/user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Simple API Gateway");
});

app.get("/create", (req, res) => {
	userRepo
		.create({
			username: "angger",
			password: "angger123"
		})
		.then(result => {
			console.log(result);
			res.status(200).send(result);
		});
});

app.use(router);

console.log("Simple API Gateway run on localhost:3000");

app.listen(3000);
