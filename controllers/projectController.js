const { Project, User, Task } = require("../models");

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create project", error: err.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({
      include: [
        { model: User, as: "owner" },
        { model: User, as: "members" },
        { model: Task, as: "tasks" },
      ],
    });
    res.json(projects);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch projects", error: err.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id, {
      include: [
        { model: User, as: "owner" },
        { model: User, as: "members" },
        { model: Task, as: "tasks" },
      ],
    });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch project", error: err.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    await project.update(req.body);
    res.json(project);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update project", error: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    await project.destroy();
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete project", error: err.message });
  }
};
