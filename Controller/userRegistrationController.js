import userRegistation from "../models/UserRegistrationModel.js"
import Apperror from "../utils/erorUtils.js"
import cloudinary from 'cloudinary'
import fs from 'fs/promises'
const userRegistrer = async (req, res, next) => {


    const { name, email, bloodGroup, gender, address, batch, contact, alternatePhone } = req.body
    try {
        console.log(name, email, gender, address, batch, alternatePhone, contact)
        // if (!name || !email || !|| !bloodGroup || !gender || !address || !batches || !emegencyContact) {
        //     next(
        //         new Apperror("All fiedlds are required", 400)
        //     )
        // }


        const userExit = await userRegistation.findOne({ email })
        console.log('userExit', userExit)

        if (userExit) {
            next(
                new Apperror('User already store', 400)
            )
        }

        const user = await userRegistation.create({
            name,
            email,
            bloodGroup,
            gender,
            address,
            batch,
            alternatePhone,
            profile: {
                public_url: "Demo",
                secure_url: "demo"
            },
            documents: {
                public_url: "Demo",
                secure_url: "demo"
            }
        })

        if (!user) {
            return next(
                new Apperror("Failed not create successfully", 400)
            )
        }

        console.log('req.file', req.file)
        if (req.file) {
            try {
                const result = await cloudinary.v2.uploader.upload(req.file.path, {
                    folder: "avatars",
                    width: 150,
                    height: 150,
                    crop: "fill",
                    gravity: "faces",
                })
                if (result) {
                    user.profile.public_url = result.public_id
                    user.profile.secure_url = result.secure_url


                    // remove the file from the local server 
                    fs.rm(`uploads/${req.file.filename}`)
                }
            } catch (error) {
                return next(new Apperror("Image upload failed" || error, 500))
            }
        }

        console.log(user)
        await user.save()
        res.status(200).json({
            success: true,
            msg: "user register successfully",
            user
        })
    } catch (error) {
        next(
            new Apperror(error, 400)
        )
    }
}


const getAllUser = async (req, res, next) => {
    try {
        const user = await userRegistation.find({})

        console.log(user)

        res.status(200).json({
            success: true,
            msg: "All user ",
            user
        })
    } catch (error) {
        next(
            new Apperror(error, 400)
        )
    }
}

export {
    userRegistrer,
    getAllUser
}