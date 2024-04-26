import userRegistation from "../models/UserRegistrationModel.js"
import Apperror from "../utils/erorUtils.js"

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
            profile,
            documents
        })

        if (req.file) {

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