const express = require("express");
const router = express.Router();

// router.use((req, res, next) => {
// 	console.log("Called: ", req.path);
// 	next();
// });

router.use(require("./modules/home"));

router.use(require("./modules/auth"));

router.use("/api/feeds", require("./modules/feeds"));
router.use("/api/hashtags", require("./modules/hashtags"));

const serviceRegister = require.main.require("./libraries/ServiceRegister");
serviceRegister.register(
	[
		{
			prefix: "/auth",
			prefixRewrite: "",
			target: "http://localhost:50000",
			middlewares: [],
			hooks: {
				// async onRequest (req, reply) {},
				// onResponse (res, reply) { reply.send(res) }
			}
		}
		// {
		// 	prefix: "/admin",
		// 	prefixRewrite: "",
		// 	target: "http://admin.myapp:3000",
		// 	middlewares: [
		// 		require("express-jwt")({ secret: "shhhhhhared-secret" }) // https://github.com/auth0/express-jwt
		// 	],
		// 	hooks: {}
		// }
	],
	router
);

module.exports = router;
