const apiAdapter = require.main.require("./routers/apiAdapter");
const BASE_URL = "http://localhost:8088";
const api = apiAdapter(BASE_URL);

const proxyService = require.main.require("./services/ProxyService");

const index = (req, res) => {
	res.send("FEEDS");
};

const showHashtags = (req, res) => {
	proxyService.send(req, res, api);
};

const store = (req, res) => {
	proxyService.send(req, res, api);
};

module.exports = {
	index,
	showHashtags,
	store
};
