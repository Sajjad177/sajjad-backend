import { Router } from "express";
import authRouter from "../modules/auth/auth.router";
import contactRouter from "../modules/contact/contact.router";
import skillsRouter from "../modules/skills/skills.router";
import userRouter from "../modules/user/user.router";
import projectRouter from "../modules/project/project.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/contact",
    route: contactRouter,
  },
  {
    path: "/skills",
    route: skillsRouter,
  },
  {
    path: "/project",
    route: projectRouter,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
