import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  IUser,
  TUserLoginBody,
  TUserRegisterBody,
} from "../interfaces/user.interfaces";
import { generateId, userDataBase } from "../database/users.database";
import { AppError } from "../errors/appError";

export class UserServices {
  async login(body: TUserLoginBody) {
    const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET as string, {
      expiresIn: "24h",
    });

    const user = userDataBase.find(
      (user) => user.email === body.email
    ) as IUser;

    const compare = await bcrypt.compare(body.password, user.password);

    if (!compare) {
      throw new AppError("Email and password doesn't match", 403);
    }

    return {
      accessToken: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }

  async register(body: TUserRegisterBody) {
    const hashPassword = await bcrypt.hash(body.password, 10);

    const newUser = {
      id: generateId(),
      name: body.name,
      email: body.email,
      password: hashPassword,
    };

    userDataBase.push(newUser);

    return newUser;
  }

  getUser() {
    const user = { id: 1, name: "Breno", email: "Breno@email.com" };

    return user;
  }
}
