import express, {Response,Request,  NextFunction } from "express"
import { UserController } from "./user.controller"

import { userValidation } from "./user.validation"
import { fileUploader } from "../../../helpers/fileUploder"

const router = express.Router()


router.get('/:id', UserController.getByIdFromDB)

router.post(
  "/",
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const bodyData =
        req.body.data && typeof req.body.data === "string"
          ? JSON.parse(req.body.data)
          : req.body;    
      const parsedData = userValidation.createUser.parse(bodyData);

      req.body = parsedData;
      UserController.createUser(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);


router.patch('/:id', UserController.updateIdFromDB)
router.delete('/:id', UserController.deleteFromDB)
router.get('/', UserController.getAllUserFromDB)

export const UserRoute = router