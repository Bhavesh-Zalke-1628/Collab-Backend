
import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { type } from 'os'
const userSchema = new Schema({
    username: {
        type: String
    },
    Mo_number: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User'
    },

}, {
    timestamps: true
})


// ecnrypt the password
// userSchema.pre('save', async function (next) {
//     if (!this.isModified(this.password)) {
//         next()
//     }
//     this.password = await bcrypt.hash(this.password, 10)
// }
// )
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});


// JWT Token
userSchema.methods.generateJwttoken = async function () {
    return await jwt.sign(
        {
            id: this._id,
            email: this.email,
            role: this.role,
            subscription: this.subscription,
            name: this.name
        },
        process.env.SECRET,
        {
            expiresIn: '2h'
        }
    )
}


// compare the enc password with the entered password
userSchema.methods.comparedPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        console.log(error)
    }
}

userSchema.methods.generateResetPasswordToken = async function () {
    const resetToken = await crypto.randomBytes(20).toString('hex')
    this.forgotPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex')
        ;
    this.forgotPasswordExpiry = Date.now() + 15 * 60 * 1000 //15min from now 

    return resetToken;
}


const User = new model("User", userSchema)
export default User;