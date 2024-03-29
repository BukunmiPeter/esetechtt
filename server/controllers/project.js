import Project from "../models/ProjectModel.js";

export const createProject = async (req, res, next) => {
  const newProject = new Project (req.body);
  try {
    const savedProject = await newProject.save();
    res.status(200).json(savedProject);
  } catch (err) {
    next(err);
  }
};

export const updateProject = async (req,res,next)=>{
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProject);
  } catch (err) {
    next(err);
  }
}
export const deleteProject = async (req,res,next)=>{
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json("Project has been deleted.");
  } catch (err) {
    next(err);
  }
}
export const getProject = async (req,res,next)=>{
  try {
    const Project = await Project.findById(req.params.id);
    res.status(200).json(Project);
  } catch (err) {
    next(err);
  }
}
export const getProjects = async (req,res,next)=>{
  try {
    const Projects = await Project.find();
    res.status(200).json(Projects);
  } catch (err) {
    next(err);
  }
}