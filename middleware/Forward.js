const proxyService = require.main.require("./services/ProxyService");

module.exports = (req, res) => {
	proxyService.send(req, res, api);
};
