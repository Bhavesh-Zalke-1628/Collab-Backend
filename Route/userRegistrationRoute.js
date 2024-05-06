import { Router } from "express";
import { getAllUser, userRegistrer } from "../Controller/UserRegistrationController.js";
import upload from '../middleware/multerMiddle.js'


const router = Router()

router.route('/swim/register')
    .post(upload.single('profile'), userRegistrer)

router.route('/user-info')
    .get(getAllUser)

router.route('/swmi/document')
    .post(upload.array(['aadhar', 'fitness']))

export default router