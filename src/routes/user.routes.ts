import { Router } from "express";
import { UserControllers } from "../controllers/user.controllers";
import { verifyToken } from "../middleware/verifyToken.middleware";

export const userRouter = Router();

const userControllers = new UserControllers();
 
userRouter.post("/login", userControllers.login);
userRouter.post("/", userControllers.register);
userRouter.get("/", verifyToken.execute, userControllers.getUser);