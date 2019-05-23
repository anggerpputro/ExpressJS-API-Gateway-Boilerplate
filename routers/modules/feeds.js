var express = require("express");
var router = express.Router();

const authMiddleware = require.main.require("./middleware/Authenticate");
const feedsController = require.main.require("./controllers/FeedsController");

router.get("/", authMiddleware, feedsController.index);
router.get("/:hashtag", authMiddleware, feedsController.showHashtags);
router.post("/", authMiddleware, feedsController.store);

module.exports = router;
