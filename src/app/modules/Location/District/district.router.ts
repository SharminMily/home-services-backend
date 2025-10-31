import express from "express"
import { DistrictController } from "./district.controller";
const router = express.Router();

router.get("/:id", DistrictController.getDistrictFromDB)
router.get("/", DistrictController.geAllDistrictFromDB)

export const DistrictRouter = router 