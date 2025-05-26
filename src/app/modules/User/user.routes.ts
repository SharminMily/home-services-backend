import express from "express"
import { UserController } from "./user.controller"

const router = express.Router()

router.get('/:id', UserController.getByIdFromDB)
router.post('/', UserController.createUser)
router.patch('/:id', UserController.updateIdFromDB)
router.delete('/:id', UserController.deleteFromDB)
router.get('/', UserController.getAllUserFromDB)

export const UserRoute = router