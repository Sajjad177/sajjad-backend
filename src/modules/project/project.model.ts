import { model, Schema } from "mongoose";
import { IProject } from "./project.interfce";


const StackSchema = new Schema(
  {
    frontend: { type: [String], required: true },
    backend: { type: [String], required: true },
    database: { type: [String], required: true },
  },
  { _id: false }
);

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },

    image: { type: String, required: true },
    link: { type: String, required: true },

    year: { type: Number, required: true },

    category: { type: String, required: true, trim: true },
    role: { type: String, required: true },

    stack: {
      type: StackSchema,
      required: true,
    },

    challenge: { type: String, required: true },
    solution: { type: String, required: true },

    impact: { type: [String], required: true },
    features: { type: [String], required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Project = model<IProject>("Project", ProjectSchema);
export default Project;