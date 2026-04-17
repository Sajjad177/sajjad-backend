import { Router } from "express";
import { upload } from "../../middleware/multer.middleware";
import ProjectController from "./project.controller";

const router = Router();

router.post("/create", upload.single("file"), ProjectController.createNewProject);
router.get("/", ProjectController.getAllProjects);
router.get("/:id", ProjectController.getSingleProject);
router.put("/:id", upload.single("file"), ProjectController.updateProject);
router.delete("/:id", ProjectController.deleteProject);

const projectRouter = router;
export default projectRouter;
