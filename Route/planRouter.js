import { Router } from 'express'
import { createPlan, getAllPlan } from '../Controller/planController.js'

const router = Router()

router.route('/getAllPlan').get(getAllPlan)

router.route('/createPlan')
    .post(createPlan)

export default router