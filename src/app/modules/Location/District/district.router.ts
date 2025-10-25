import express from "express"
import { DistrictController } from "./district.controller";
const router = express.Router();

router.get("/:id", DistrictController.getDistrictFromDB)

export const DistrictRouter = router 