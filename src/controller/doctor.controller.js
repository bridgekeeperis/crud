const { doctor_Services } = require("../services");

const doctor_controller_post = async(req,res) => {
    try {

        const new_doctor = await doctor_Services.create_doctor(req.body)

            if (!new_doctor) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_doctor
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const doctor_controller_get = async(req,res) => {
    try {

        const list = await doctor_Services.list_doctor()

            if (!list) {
                throw new Error('Not Found...!')
            }

        res.status(200).json({
            success: true,
            data: list
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const doctor_controller_delete = async(req,res) => {
    try {

        const id = req.params.doctorid
        const result = await doctor_Services.delete_doctor(id)

        res.status(200).json({
            id: id,
            success: true
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


const doctor_controller_update = async(req,res) => {
    try {
        const id = req.params.doctor_id
        const data = req.body

        const result = await doctor_Services.update_doctor(id,data)

        if(!result){
            throw new Error("Not updated")
        }

        res.status(200).json({
            success: true,
            message: "Updated",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    doctor_controller_post,
    doctor_controller_get,
    doctor_controller_delete,
    doctor_controller_update
}