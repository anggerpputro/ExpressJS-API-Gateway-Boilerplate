const express = require("express");

const helmet = require("helmet");
const bodyParser = require("body-parser");

const router = require("./routers/router");

const app = express();

app.use(helmet);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Simple API Gateway");
});

app.use(router);

console.log("Simple API Gateway run on localhost:3000");

app.listen(3000);
