import jwt from "jsonwebtoken";
import { IUser } from "../interfaces/user.interfaces";

export class UserServices {
   login() {
      const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET as string, { expiresIn: "24h" });

      return { accessToken: token };
   }

   getUser(): IUser {
      const user: IUser = { id: 1, name: "Alex", email: "alex@email.com" };
      
      return user;
   }
}
