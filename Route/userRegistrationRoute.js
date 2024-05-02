import { Router } from "express";
import { getAllUser, userRegistrer } from "../Controller/UserRegistrationController.js";
import upload from '../middleware/multerMiddle.js'


const router = Router()

router.route('/swim/register')
    .post(userRegistrer)

router.route('/user-info')
    .get(getAllUser)


export default router