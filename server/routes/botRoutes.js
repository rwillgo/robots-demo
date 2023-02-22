var express = require("express");
var router = express.Router();
var botsController = require("../controllers/botsController");

/* List bots */
router.get("/bots", botsController.list);

/* Create bot */
router.post("/bots", botsController.create);

/* Fetch bot */
router.get("/bots/:botId", botsController.fetch);

/* Update bot */
router.put("/bots/:botId", botsController.update);

/* Remove bot */
router.delete("/bots/:botId", botsController.remove);

module.exports = router;
