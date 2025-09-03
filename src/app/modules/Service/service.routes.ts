import express from "express"
import { ServiceController } from "./service.controller";

const router = express.Router();

router.post("/", ServiceController.createService)
// router.get("/")

export const ServiceRouter = router