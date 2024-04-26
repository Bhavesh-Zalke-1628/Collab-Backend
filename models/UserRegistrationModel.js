import { Schema, model } from "mongoose";


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
    emegencyContact: {
        type: Number
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    bloodGroup: {
        type: String
    },
    address: {
        type: String
    },
    batches: {
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
    }
})



const userRegistation = model('RegistreUser', userRegistrationSchema)

export default userRegistation
