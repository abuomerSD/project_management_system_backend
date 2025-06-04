const { Attachment, Task } = require("../models");

exports.uploadAttachment = async (req, res) => {
  try {
    const { task_id } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const attachment = await Attachment.create({
      task_id,
      file_name: req.file.originalname,
      file_path: req.file.path,
    });

    res.status(201).json(attachment);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to upload file", error: err.message });
  }
};

exports.getAttachmentsByTask = async (req, res) => {
  try {
    const attachments = await Attachment.findAll({
      where: { task_id: req.params.taskId },
    });
    res.json(attachments);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch attachments", error: err.message });
  }
};

exports.deleteAttachment = async (req, res) => {
  try {
    const attachment = await Attachment.findByPk(req.params.id);
    if (!attachment)
      return res.status(404).json({ message: "Attachment not found" });

    // يمكنك أيضًا حذف الملف من النظام باستخدام fs.unlink
    await attachment.destroy();
    res.json({ message: "Attachment deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete attachment", error: err.message });
  }
};
