const { Project_Member, User, Project } = require("../models");

exports.addMember = async (req, res) => {
  try {
    const { project_id, user_id, role } = req.body;

    const member = await Project_Member.create({ project_id, user_id, role });
    res.status(201).json(member);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to add member", error: err.message });
  }
};

exports.getMembersByProject = async (req, res) => {
  try {
    const members = await Project_Member.findAll({
      where: { project_id: req.params.projectId },
      include: [{ model: User, attributes: ["id", "name", "email"] }],
    });
    res.json(members);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch members", error: err.message });
  }
};

exports.removeMember = async (req, res) => {
  try {
    const { project_id, user_id } = req.body;

    const member = await Project_Member.findOne({
      where: { project_id, user_id },
    });
    if (!member) return res.status(404).json({ message: "Member not found" });

    await member.destroy();
    res.json({ message: "Member removed successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to remove member", error: err.message });
  }
};
