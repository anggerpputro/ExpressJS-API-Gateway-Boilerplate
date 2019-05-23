const apiAdapter = require.main.require("./routers/apiAdapter");
const BASE_URL = "http://localhost:8089";
const api = apiAdapter(BASE_URL);

const index = (req, res) => {
	res.send("HASHTAG");
};

const show = (req, res) => {
	api.get(req.path).then(resp => {
		res.send(resp.data);
	});
};

module.exports = {
	index,
	show
};
