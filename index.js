require("dotenv").config();
const startupDebug = require("debug")("app:startup");

const express = require("express");

const app = express();

if (process.env.APP_ENV == "local") {
	const morgan = require("morgan");
	app.use(morgan("tiny"));
	startupDebug("Morgan enabled...");
} else {
	startupDebug("Morgan disabled...");
}

const helmet = require("helmet");
app.use(helmet());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = require("./routers/router");
app.use(router);

console.log("Simple API Gateway run on localhost:3000");

app.listen(3000);
