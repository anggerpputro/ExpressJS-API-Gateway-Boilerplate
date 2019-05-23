const apiAdapter = require.main.require("./routers/apiAdapter");
const BASE_URL = "http://localhost:8088";
const api = apiAdapter(BASE_URL);

const index = (req, res) => {
	res.send("FEEDS");
};

const showHashtags = (req, res) => {
	api.get(req.path).then(resp => {
		res.send(resp.data);
	});
};

const store = (req, res) => {
	api.get(req.path).then(resp => {
		res.send(resp.data);
	});
};

module.exports = {
	index,
	showHashtags,
	store
};
