import express from "express"
import { BookingController } from "./booking.controller";



const router = express.Router();

router.get("/:id", BookingController.IdFromDb)
router.post("/", BookingController.createBooking)
router.patch("/id", BookingController.updateBooking)
router.delete("/id", BookingController.deleteIdFromDb)
router.get("/", BookingController.getAllFromDb)
// router.get("/")

export const LocationRouter = router