import { Router } from "express";
import { userRegistrer, getAllUser } from "../Controller/UserRegistrationController";


const router = Router()

router.route('/register')
    .post(userRegistrer)

router.route('/user-info')
    .get(getAllUser)

export default router