import { uploadToCloudinary } from "../../utils/cloudinary";
import { IProject } from "./project.interfce";
import Project from "./project.model";

const createNewProject = async (payload: IProject, file?: any) => {
    if (file) {
        const uploadedImage = await uploadToCloudinary(file.path, "projects");
        payload.image = uploadedImage;
    }
    const result = await Project.create(payload);
    return result;
}

const getAllProjects = async () => {
    const result = await Project.find();
    return result;
}

const getSingleProject = async (id: string) => {
    const result = await Project.findById(id);
    return result;
}

const updateProject = async (id: string, payload: Partial<IProject>, file?: any) => {
    if (file) {
        const uploadedImage = await uploadToCloudinary(file.path, "projects");
        payload.image = uploadedImage;
    }
    const result = await Project.findByIdAndUpdate(id, payload, { new: true });
    return result;
}

const deleteProject = async (id: string) => {
    const result = await Project.findByIdAndDelete(id);
    return result;
}

const ProjectService = {
    createNewProject,
    getAllProjects,
    getSingleProject,
    updateProject,
    deleteProject
}

export default ProjectService;
