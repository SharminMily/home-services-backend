import express from "express"
import { DivisionController } from "./division.controller";
const router = express.Router();

router.get("/",  DivisionController.getDivisionFromDB)

export const DivisionRouter = router 