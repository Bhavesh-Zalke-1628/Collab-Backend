import { Router } from "express";
import { getAllUser, userRegistrer } from "../Controller/UserRegistrationController.js";


const router = Router()

router.route('/swim/register')
    .post(userRegistrer)

router.route('/user-info')
    .get(getAllUser)

export default router