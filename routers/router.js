const express = require("express");
const router = express.Router();

// router.use((req, res, next) => {
// 	console.log("Called: ", req.path);
// 	next();
// });

router.use(require("../controllers/AuthController"));

router.use("/api/feeds", require("./modules/feeds"));
router.use("/api/hashtags", require("./modules/hashtags"));

module.exports = router;
