import express from "express"
import { UserController } from "./user.controller"
import { fileUploder } from "../../../helpers/fileUploder"

const router = express.Router()

router.get('/:id', UserController.getByIdFromDB)
router.post('/',
    fileUploder.upload.single('file'),
     UserController.createUser)
router.patch('/:id', UserController.updateIdFromDB)
router.delete('/:id', UserController.deleteFromDB)
router.get('/', UserController.getAllUserFromDB)

export const UserRoute = router