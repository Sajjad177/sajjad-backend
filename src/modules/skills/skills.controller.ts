import catchAsync from "../../utils/catchAsync";

const createNewSkills = catchAsync(async (req, res) => {});

const getSkills = catchAsync(async (req, res) => {});

const updateSkills = catchAsync(async (req, res) => {});

const skillsController = {
  createNewSkills,
  getSkills,
  updateSkills,
};

export default skillsController;
