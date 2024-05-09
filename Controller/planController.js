import Plan from "../models/planModel.js"


const createPlan = async (req, res) => {
    const { planName, price, planId, description } = req.body
    console.log(
        planId,
        planName,
        price,
        description
    )

    const plan = await Plan.create({
        planId,
        planName,
        price,
        description
    })

    res.status(200).json({
        success: true,
        msg: "user create successfully",
        plan
    })
}

const getAllPlan = async (req, res, next) => {
    const data = await Plan.find()
    console.log(data)
    res.send(data)
}
export { getAllPlan, createPlan }

