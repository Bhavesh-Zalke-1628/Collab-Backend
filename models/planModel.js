import { Schema, model } from 'mongoose'

const planSchema = new Schema(
    {
        planId: {
            type: String
        },
        planName: {
            type: String
        },
        price: {
            type: Number
        },
        description: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Plan = new model('Plan', planSchema)
export default Plan