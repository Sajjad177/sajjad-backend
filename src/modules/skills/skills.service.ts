import { uploadToCloudinary } from "../../utils/cloudinary";
import { ISkills } from "./skills.interface";
import Skills from "./skills.model";

const createNewSkills = async (payload: ISkills, files: any[]) => {
  if (files && files.length > 0) {
    const uploadedImages = await Promise.all(
      files.map((file) => uploadToCloudinary(file.path || "", "skills")),
    );

    if (payload.skills && Array.isArray(payload.skills)) {
      payload.skills.forEach((skill, index) => {
        skill.img = uploadedImages[index] || "";
      });
    }
  }

  const result = await Skills.create(payload);
  return result;
};

const getSkills = async () => {
  const result = await Skills.find();
  return result;
};

const updateSkills = async (id: string, payload: Partial<ISkills>, files: any[]) => {
  if (files && files.length > 0 && payload.skills && Array.isArray(payload.skills)) {
    const uploadedImages = await Promise.all(
      files.map((file) => uploadToCloudinary(file.path || "", "skills")),
    );

    let imgIndex = 0;
    payload.skills.forEach((skill) => {
      if (!skill.img || skill.img === "") {
        if (uploadedImages[imgIndex]) {
          skill.img = uploadedImages[imgIndex];
          imgIndex++;
        }
      }
    });
  }

  const result = await Skills.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const skillsService = {
  createNewSkills,
  getSkills,
  updateSkills,
};

export default skillsService;
