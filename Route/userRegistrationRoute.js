import { Router } from "express";
import { userRegistrer } from "../Controller/UserRegistrationController";


const router = Router()

router.route('/user/register')
    .post(userRegistrer)


export default router