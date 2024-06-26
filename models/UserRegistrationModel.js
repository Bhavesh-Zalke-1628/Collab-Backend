import mongoose, { Schema, model } from "mongoose";


const userRegistrationSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    contact: {
        type: Number
    },
    alternatePhone: {
        type: Number
    },
    gender: {
        type: String,
    },
    bloodGroup: {
        type: String
    },
    address: {
        type: String
    },
    batch: {
        type: String
    },
    profile: {
        public_url: {
            type: String
        },
        secure_url: {
            type: String
        }
    },
    documents: {
        public_url: {
            type: String
        },
        secure_url: {
            type: String
        }
    },
    subscription: {
        id: String,
        status: String
    },
    batch: {
        batch: String,
        batchTime: String,
        batchVel: String
    }
})




const userRegistation = model('RegistreUser', userRegistrationSchema)

export default userRegistation
