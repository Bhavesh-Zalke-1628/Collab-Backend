import { Router } from "express";
import { allPayment, buySubscription, getRazorpayKey, cancleSubscription, verifySbscription } from "../Controller/registrationPaymentController.js";
import { isLoggedIn } from "../middleware/authMiddleWare.js";

const router = Router()

router
    .route('/razorpay-key/getid')
    .get(
        getRazorpayKey
    )
router
    .route('/razorpay/subscribe')
    .post(
        buySubscription
    )

router
    .route('/razorpay/verify')
    .post(
        verifySbscription
    )
router
    .route('/unsubscribe')
    .post(
        cancleSubscription
    )

router
    .route('/')
    .get(
        allPayment
    )


export default router