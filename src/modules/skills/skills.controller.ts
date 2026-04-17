import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import skillsService from "./skills.service";

const createNewSkills = catchAsync(async (req, res) => {
  const files = req.files as Express.Multer.File[];
  let payload = req.body;

  if (req.body.data && typeof req.body.data === "string") {
    try {
      payload = JSON.parse(req.body.data);
    } catch (error) {
       // Ignore parsing error, default to req.body
    }
  }

  const result = await skillsService.createNewSkills(payload, files);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Skills created successfully",
    data: result,
  });
});

const getSkills = catchAsync(async (req, res) => {
  const result = await skillsService.getSkills();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Skills retrieved successfully",
    data: result,
  });
});

const updateSkills = catchAsync(async (req, res) => {
  const { id } = req.params;
  const files = req.files as Express.Multer.File[];
  let payload = req.body;

  if (req.body.data && typeof req.body.data === "string") {
    try {
      payload = JSON.parse(req.body.data);
    } catch (error) {
       // Ignore parsing error, default to req.body
    }
  }

  const result = await skillsService.updateSkills(id, payload, files);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Skills updated successfully",
    data: result,
  });
});

const skillsController = {
  createNewSkills,
  getSkills,
  updateSkills,
};

export default skillsController;
