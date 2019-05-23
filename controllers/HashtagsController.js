const apiAdapter = require.main.require("./routers/apiAdapter");
const BASE_URL = "http://localhost:8089";
const api = apiAdapter(BASE_URL);

const proxyService = require.main.require("./services/ProxyService");

const index = (req, res) => {
	res.send("HASHTAG");
};

const show = (req, res) => {
	proxyService.send(req, res, api);
};

module.exports = {
	index,
	show
};
