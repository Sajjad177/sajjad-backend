import { Router } from "express";
import { upload } from "../../middleware/multer.middleware";
import skillsController from "./skills.controller";

const router = Router();

router.post("/create", upload.array("file"), skillsController.createNewSkills);

const skillsRouter = router;
export default skillsRouter;
