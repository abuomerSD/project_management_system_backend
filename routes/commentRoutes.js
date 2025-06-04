const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// إضافة تعليق جديد
router.post("/", commentController.createComment);

// جلب كل التعليقات المرتبطة بمهمة معينة
router.get("/task/:taskId", commentController.getCommentsByTask);

// حذف تعليق
router.delete("/:id", commentController.deleteComment);

module.exports = router;
