import { Request, Response } from "express"
import { UserServices } from "./user.service"

const createUser = async(req: Request, res: Response) => {
    console.log(req.body)
    const result = await UserServices.createUser()
   res.send(result)
}

export const UserController = {
    createUser
}