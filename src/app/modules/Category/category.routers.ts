import express from "express"
import { CategoryController } from "./category.controller";

const router = express.Router();

router.get("/:id", CategoryController.getByIdFromDB)
router.delete("/:id", CategoryController.deleteFromDB)
router.post("/", CategoryController.createCategory)
router.get("/", CategoryController.getAllCategory)
// router.get("/")

export const CategoryRouter = router