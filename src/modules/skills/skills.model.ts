import { model, Schema } from "mongoose";
import { ISkills, Skill } from "./skills.interface";

const SkillSchema = new Schema<Skill>(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
  },
  { _id: false },
);

const SkillsSchema = new Schema<ISkills>(
  {
    title: { type: String, required: true },
    skills: { type: [SkillSchema], required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Skills = model<ISkills>("Skills", SkillsSchema);

export default Skills;
