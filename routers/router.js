const express = require("express");
const router = express.Router();
const feedService = require("./feedService");
const hashtagService = require("./hashtagService");
const authRouter = require("../controllers/AuthController");

router.use((req, res, next) => {
	console.log("Called: ", req.path);
	next();
});

router.use(feedService);
router.use(hashtagService);
router.use(authRouter);

module.exports = router;
