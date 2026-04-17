import { Router } from "express";
import { upload } from "../../middleware/multer.middleware";
import skillsController from "./skills.controller";

const router = Router();

router.post("/", upload.any(), skillsController.createNewSkills);
router.get("/all", skillsController.getSkills);
router.put("/:id", upload.any(), skillsController.updateSkills);

const skillsRouter = router;
export default skillsRouter;
