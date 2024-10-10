import "dotenv/config";
import "express-async-errors"
import express, { json } from "express";
import helmet from "helmet";
import jwt from "jsonwebtoken";
import { handleErrors } from "./middleware/handleError.middleware";
import { userRouter } from "./router/user.routes";


export const app = express();

app.use(helmet());

app.use(json());

app.use("/users", userRouter);

/* app.get("/auth", (req, res) => {
  try {
    const token = req.headers.authorization;

    const secret = process.env.JWT_SECRET;

    if (token && secret) {
      jwt.verify(token, secret);

      const payload = jwt.decode(token);


      return res.status(200).json(payload)
    }
  } catch (error) {
    return res.status(403).json(error);
  }
});

app.post("/login", (req, res) => {
 
  }
});
*/


app.use(handleErrors.execute);
