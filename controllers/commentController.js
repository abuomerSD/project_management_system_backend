const { Comment, Task, User } = require("../models");

exports.createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create comment", error: err.message });
  }
};

exports.getCommentsByTask = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { task_id: req.params.taskId },
      include: [
        { model: User, as: "author", attributes: ["id", "name", "email"] },
      ],
      order: [["created_at", "ASC"]],
    });
    res.json(comments);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch comments", error: err.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    await comment.destroy();
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete comment", error: err.message });
  }
};
