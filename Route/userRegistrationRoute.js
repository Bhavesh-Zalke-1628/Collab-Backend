import { Router } from "express";
import upload from '../middleware/multerMiddle.js'
import { isLoggedIn } from "../middleware/authMiddleWare.js";
import { fitnessCard, getAllUser, getSingleUser, uploadBatch, userRegistrer } from "../Controller/userRegistrationController.js";


const router = Router()

router.route('/swim/register:id')
    .post(upload.single('profile'), isLoggedIn, userRegistrer)

router.route('/user-info')
    .get(isLoggedIn, getAllUser)

router.route('/user-one/:id')
    .get(isLoggedIn, getSingleUser)

router.route('/swim/document')
    .post(upload.single('fitness'), isLoggedIn, fitnessCard)
router.route('/batch/upload:id')
    .post(isLoggedIn, uploadBatch)

export default router