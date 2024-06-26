import { Router } from "express";
import { allPayment, buySubscription, getRazorpayKey, cancleSubscription, verifySbscription } from "../Controller/paymentController.js";
import { authorisedRoles, authorisedSubscriber } from "../middleware/authMiddleWare.js";

const router = Router()

router
    .route('/razorpay-key/getid')
    .get(
        getRazorpayKey
    )
router
    .route('/razorpay/subscribe/:id')
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

        authorisedSubscriber,
        cancleSubscription
    )

router
    .route('/')
    .get(
        // 
        // authorisedRoles('Admin'),
        // authorisedSubscriber,
        allPayment
    )


export default router