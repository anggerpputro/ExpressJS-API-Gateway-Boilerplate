const get = (req, res, api) => {
	api.get(req.path)
		.then(resp => {
			if (resp.data) {
				res.status(resp.data.statusCode).send(resp.data);
			} else {
				res.status(500).send("Internal Server Error!");
			}
		})
		.catch(err => {
			if (err.response) {
				res.status(error.response.statusCode).send(err.response.data);
			} else {
				res.status(500).send("Internal Server Error!");
			}
		});
};

const post = (req, res, api) => {
	api.post(req.path)
		.then(resp => {
			if (resp.data) {
				res.status(resp.data.statusCode).send(resp.data);
			} else {
				res.status(500).send("Internal Server Error!");
			}
		})
		.catch(err => {
			if (err.response) {
				res.status(error.response.statusCode).send(err.response.data);
			} else {
				res.status(500).send("Internal Server Error!");
			}
		});
};

const send = (req, res, api) => {
	if (req.method == "POST") {
		post(req, res, api);
	} else {
		get(req, res, api);
	}
};

module.exports = {
	send
};
