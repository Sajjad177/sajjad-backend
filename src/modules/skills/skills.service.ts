import { uploadToCloudinary } from "../../utils/cloudinary";
import { ISkills } from "./skills.interface";
import Skills from "./skills.model";

const createNewSkills = async (payload: ISkills, files: any[]) => {
  if (files && files.length > 0) {
    const uploadedImages = await Promise.all(
      files.map((file) => uploadToCloudinary(file.path || "", "skills")),
    );

    payload.skills.forEach((skill, index) => {
      skill.img = uploadedImages[index]?.secure_url || "";
    });
  }

  const result = await Skills.create(payload);
  return result;
};


const getSkills = async () => {};

const updateSkills = async (skillsData: ISkills) => {};

const skillsService = {
  createNewSkills,
  getSkills,
  updateSkills,
};

export default skillsService;
