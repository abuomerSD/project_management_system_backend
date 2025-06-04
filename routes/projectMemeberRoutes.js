const express = require("express");
const router = express.Router();
const controller = require("../controllers/projectMemberController");

// إضافة عضو لمشروع
router.post("/", controller.addMember);

// عرض كل أعضاء مشروع
router.get("/:projectId", controller.getMembersByProject);

// حذف عضو من مشروع
router.delete("/", controller.removeMember);

module.exports = router;
