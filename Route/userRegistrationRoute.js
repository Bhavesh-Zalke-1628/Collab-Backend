import { Router } from "express";
import { fitnessCard, getAllUser, userRegistrer } from "../Controller/UserRegistrationController.js";
import upload from '../middleware/multerMiddle.js'
import { isLoggedIn } from "../middleware/authMiddleWare.js";


const router = Router()

router.route('/swim/register')
    .post(upload.single('profile'), userRegistrer)

router.route('/user-info')
    .get(getAllUser)

router.route('/:_id/swim/document')
    .post(upload.single('fitness'), fitnessCard)

export default router