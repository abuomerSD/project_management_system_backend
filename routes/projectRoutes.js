const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.route("/").get(projectController.test);

module.exports = router;
