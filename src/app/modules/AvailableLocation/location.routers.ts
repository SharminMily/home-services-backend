import express from "express"
import { LocationController } from "./location.controller";


const router = express.Router();

router.get("/:id", LocationController.IdFromDb)
router.post("/", LocationController.createLocation)
router.patch("/id", LocationController.updateLocation)
router.delete("/id", LocationController.deleteIdFromDb)
router.get("/", LocationController.getAllFromDb)
// router.get("/")

export const LocationRouter = router