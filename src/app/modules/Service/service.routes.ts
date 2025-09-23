import express, { NextFunction, Request, Response } from "express";
import { ServiceController } from "./service.controller";
import { fileUploader } from "../../../helpers/fileUploder";
import { serviceValidation } from "./service.validation";

const router = express.Router();

router.get("/:id", ServiceController.serviceIdFromDb);

router.post(
  "/",
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log("Raw body:", req.body);
      const parsedBody = JSON.parse(req.body.text);

      const parsed = serviceValidation.createService.parse({
        ...parsedBody,
        price: Number(parsedBody.price),
      });
      req.body = parsed;
      return ServiceController.createService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/:id", ServiceController.deleteIdFromDb);
router.get("/:id", ServiceController.updateService);
router.get("/", ServiceController.allServiceFromDb);
// router.get("/")

export const ServiceRouter = router;
