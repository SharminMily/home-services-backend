// import express from "express"

// const router = express.Router()


import express from "express"
import { ReviewController } from "./review.controller";


const router = express.Router();

router.get("/:id", ReviewController.getByIdFromDB)
router.delete("/:id", ReviewController.deleteFromDB)
router.post("/", ReviewController.createReview)
router.get("/", ReviewController.getAllReview)
// router.get("/")

export const ReviewRouter = router