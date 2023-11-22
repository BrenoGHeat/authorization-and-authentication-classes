import "dotenv/config";
import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import jwt from "jsonwebtoken";
import { handleErrors } from "./middleware/handleError.middlewares";
import { userRouter } from "./routes/user.routes";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/users", userRouter);

app.use(handleErrors.execute);