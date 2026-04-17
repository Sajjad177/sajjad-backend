import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import ProjectService from "./project.service";

const createNewProject = catchAsync(async (req, res) => {
    let payload = req.body;
    if (req.body.data && typeof req.body.data === "string") {
        try {
            payload = JSON.parse(req.body.data);
        } catch (error) {}
    }

    const file = req.file;
    const result = await ProjectService.createNewProject(payload, file);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Project created successfully",
        data: result,
    });
});

const getAllProjects = catchAsync(async (req, res) => {
    const result = await ProjectService.getAllProjects();
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Projects retrieved successfully",
        data: result,
    });
});

const getSingleProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProjectService.getSingleProject(id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Project retrieved successfully",
        data: result,
    });
});

const updateProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    let payload = req.body;
    if (req.body.data && typeof req.body.data === "string") {
        try {
            payload = JSON.parse(req.body.data);
        } catch (error) {}
    }
    const file = req.file;

    const result = await ProjectService.updateProject(id, payload, file);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Project updated successfully",
        data: result,
    });
});

const deleteProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProjectService.deleteProject(id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Project deleted successfully",
        data: result,
    });
});

const ProjectController = {
    createNewProject,
    getAllProjects,
    getSingleProject,
    updateProject,
    deleteProject
}

export default ProjectController;