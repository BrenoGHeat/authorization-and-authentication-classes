import { Request, Response } from "express";
import { UserServices } from "../services/user.services";

export class UserControllers {
   login(req: Request, res: Response): Response {
      const userServices = new UserServices();

      const response = userServices.login();

      return res.status(200).json(response);
   }

   getUser(req: Request, res: Response) {
      const userServices = new UserServices();

      const response = userServices.getUser();

      return res.status(200).json(response);
   }
}
