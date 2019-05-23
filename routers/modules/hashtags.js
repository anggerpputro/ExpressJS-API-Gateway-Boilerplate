var express = require("express");
var router = express.Router();

const authMiddleware = require.main.require("./middleware/Authenticate");
const hashtagsController = require.main.require(
	"./controllers/HashtagsController"
);

router.get("/", authMiddleware, hashtagsController.index);
router.get("/:name", authMiddleware, hashtagsController.show);

module.exports = router;
