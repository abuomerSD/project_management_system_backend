const express = require("express");
const router = express.Router();
const taskctController = require("../controllers/taskController");

router.route("/").get(taskctController.test);

module.exports = router;
