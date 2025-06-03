const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.route("/").get(authController.test);

module.exports = router;
