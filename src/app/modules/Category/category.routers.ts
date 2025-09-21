import express, { NextFunction, Request, Response } from "express";
import { CategoryController } from "./category.controller";
import { parse } from "path";
import { categoryValidation } from "./category.validation";
import { fileUploader } from "../../../helpers/fileUploder";

const router = express.Router();

router.get("/:id", CategoryController.getByIdFromDB);
router.delete("/:id", CategoryController.deleteFromDB);

//categoryvalidation
router.post(
  "/",
  fileUploader.upload.single("file"),
    (req: Request, res: Response, next: NextFunction) => {
      try {
        const bodyData =
          req.body.data && typeof req.body.data === "string"
            ? JSON.parse(req.body.data)
            : req.body;    
        const parsedData = categoryValidation.createCategory.parse(bodyData);
  
        req.body = parsedData;
        CategoryController.createCategory(req, res, next);
      } catch (error) {
        next(error);
      }
    }
  );


router.get("/", CategoryController.getAllCategory);
// router.get("/")

export const CategoryRouter = router;
