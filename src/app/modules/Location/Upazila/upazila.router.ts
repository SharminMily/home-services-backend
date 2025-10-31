import express from "express"
import { UpazilaController } from "./upazila.controller";
const router = express.Router();

router.get("/", UpazilaController.getAllUpazilaFromDb)

export const UpazilaRouter = router 