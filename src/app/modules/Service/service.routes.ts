import express from "express"
import { ServiceController } from "./service.controller";

const router = express.Router();
router.get("/:id", ServiceController.serviceIdFromDb)
router.post("/", ServiceController.createService)
router.get("/:id", ServiceController.deleteIdFromDb)
router.get("/:id", ServiceController.updateService)
router.get("/", ServiceController.allServiceFromDb)
// router.get("/")

export const ServiceRouter = router