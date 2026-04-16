import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import skillsService from "./skills.service";

const createNewSkills = catchAsync(async (req, res) => {
    const files = req.files as Express.Multer.File[];
  const result = await skillsService.createNewSkills(req.body, files );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Skills created successfully",
    data: result,
  });
});

const getSkills = catchAsync(async (req, res) => {});

const updateSkills = catchAsync(async (req, res) => {});

const skillsController = {
  createNewSkills,
  getSkills,
  updateSkills,
};

export default skillsController;
