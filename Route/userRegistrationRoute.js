import { Router } from "express";
import upload from '../middleware/multerMiddle.js'
import { isLoggedIn } from "../middleware/authMiddleWare.js";
import { fitnessCard, getAllUser, getSingleUser, userRegistrer } from "../Controller/userRegistrationController.js";


const router = Router()

router.route('/swim/register')
    .post(upload.single('profile'), isLoggedIn, userRegistrer)

router.route('/user-info')
    .get(isLoggedIn, getAllUser)

router.route('/user-one/:id')
    .get(isLoggedIn, getSingleUser)

router.route('/swim/document')
    .post(upload.single('fitness'), isLoggedIn, fitnessCard)

export default router