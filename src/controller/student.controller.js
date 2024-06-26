const { student_Services } = require("../services");

const student_controller_post = async(req,res) => {
    try {

        const new_student = await student_Services.create_student(req.body)

            if (!new_student) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_student
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const student_controller_get = async(req,res) => {
    try {

        const list = await student_Services.list_student()

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

const student_controller_delete = async(req,res) => {
    try {

        const id = req.params.studentid
        const result = await student_Services.delete_student(id)

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


const student_controller_update = async(req,res) => {
    try {
        const id = req.params.student_id
        const data = req.body

        const result = await student_Services.update_student(id,data)

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
    student_controller_post,
    student_controller_get,
    student_controller_delete,
    student_controller_update
}