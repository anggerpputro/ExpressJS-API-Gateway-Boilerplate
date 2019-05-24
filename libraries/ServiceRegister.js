const debug = require("debug")("app:service-register");

// const express = require("express");
// const router = express.Router();

const apiAdapter = require.main.require("./routers/apiAdapter");
const proxyService = require.main.require("./services/ProxyService");

const register = (options, router) => {
	options.forEach(opt => {
		const prefix = "/api" + opt.prefix;
		const target = opt.target;

		const BASE_URL = target + prefix;
		const api = apiAdapter(BASE_URL);

		router.use(prefix, (req, res, next) => {
			res.send("MATCH!! ::>  " + prefix);
			// proxyService.send(req, res, api);
		});

		// router.route(prefix + "/*").all((req, res, next) => {
		// 	res.send("MATCH!! ::>  " + prefix);
		// 	// proxyService.send(req, res, api);
		// });

		debug("Route Registered: " + prefix);
	});
};

module.exports = {
	register
};
