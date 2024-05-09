import { Router } from "express";
import upload from '../middleware/multerMiddle.js'
import { isLoggedIn } from "../middleware/authMiddleWare.js";
import { fitnessCard, getAllUser, userRegistrer } from "../Controller/userRegistrationController.js";


const router = Router()

router.route('/swim/register')
    .post(upload.single('profile'), userRegistrer)

router.route('/user-info')
    .get(getAllUser)

router.route('/swim/document')
    .post(upload.single('fitness'), fitnessCard)

export default router