import express from "express"
import { ServiceProviderController } from "./serviceProvider.controller";

const router = express.Router();

router.get("/:id", ServiceProviderController.IdFromDb)
router.post("/", ServiceProviderController.createServiceProvider)
router.patch("/id", ServiceProviderController.updateLocation)
router.delete("/id", ServiceProviderController.deleteIdFromDb)
router.get("/", ServiceProviderController.getAllFromDb)
// router.get("/")

export const LocationRouter = router