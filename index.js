const express = require("express");

const app = express();

if (app.get("env") === "development") {
	const morgan = require("morgan");
	app.use(morgan("tiny"));
	console.log("Morgan enabled...");
}

const helmet = require("helmet");
app.use(helmet());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Simple API Gateway");
});

const router = require("./routers/router");
app.use(router);

console.log("Simple API Gateway run on localhost:3000");

app.listen(3000);
