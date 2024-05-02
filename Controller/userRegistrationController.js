import userRegistation from "../models/UserRegistrationModel.js"
import Apperror from "../utils/erorUtils.js"
import cloudinary from 'cloudinary'
const userRegistrer = async (req, res, next) => {


    const { name, email, contact, bloodGroup, gender, address, batches, emegencyContact } = req.body
    try {

        if (!name || !email || !contact || !bloodGroup || !gender || !address || !batches || !emegencyContact) {
            next(
                new Apperror("All fiedlds are required", 400)
            )
        }
        const user = userRegistation.create({
            name,
            email,
            contact,
            bloodGroup,
            gender,
            address,
            batches,
            emegencyContact,
            profile: {
                public_url: "Demo",
                secure_url: "demo"
            },
            // documents: {
            //     public_url: "Demo",
            //     secure_url: "demo"
            // }
        })

        console.log(req.file)
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
                    user.avatar.public_id = result.public_id
                    user.avatar.secure_url = result.secure_url

                    // remove the file from the local server 
                    fs.rm(`uploads/${req.file.filename}`)
                }
            } catch (error) {
                return next(new Apperror("Image upload failed" || error, 500))
            }
        }
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