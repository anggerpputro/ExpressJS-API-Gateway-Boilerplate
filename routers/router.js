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

module.exports = router;
