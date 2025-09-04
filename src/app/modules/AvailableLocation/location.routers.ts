import express from "express"
import { LocationController } from "./location.controller";


const router = express.Router();

router.post("/", LocationController.createService)
// router.get("/")

export const LocationRouter = router