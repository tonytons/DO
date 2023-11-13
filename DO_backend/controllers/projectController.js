const Project = require('../models/Project');

const projectController = {
  createProject: async (req, res) => {
    try {
      const project = new Project(req.body);
      await project.save();
      res.status(201).json(project);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getProject: async (req, res) => {
    try {
      const project = await Project.findById(req.params.id);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateProject: async (req, res) => {
    try {
      const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.json(project);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteProject: async (req, res) => {
    try {
      const project = await Project.findByIdAndDelete(req.params.id);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.json({ message: 'Project deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = projectController;
