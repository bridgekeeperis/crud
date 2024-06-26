const { school_Services } = require("../services");

const school_controller_post = async(req,res) => {
    try {

        const new_school = await school_Services.create_school(req.body)

            if (!new_school) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_school
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const school_controller_get = async(req,res) => {
    try {

        const list = await school_Services.list_school()

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

const school_controller_delete = async(req,res) => {
    try {

        const id = req.params.schoolid
        const result = await school_Services.delete_school(id)

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


const school_controller_update = async(req,res) => {
    try {
        const id = req.params.school_id
        const data = req.body

        const result = await school_Services.update_school(id,data)

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
    school_controller_post,
    school_controller_get,
    school_controller_delete,
    school_controller_update
}