const express = require("express");
const router = express.Router();
const attachmentController = require("../controllers/attachmentController");
const upload = require("../middlewares/upload");

// رفع مرفق
router.post("/", upload.single("file"), attachmentController.uploadAttachment);

// جلب مرفقات مرتبطة بمهمة
router.get("/task/:taskId", attachmentController.getAttachmentsByTask);

// حذف مرفق
router.delete("/:id", attachmentController.deleteAttachment);

module.exports = router;
