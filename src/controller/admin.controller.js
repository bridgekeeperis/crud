const { admin_Services } = require("../services");

const admin_controller_post = async(req,res) => {
    try {

        const new_admin = await admin_Services.create_admin(req.body)

            if (!new_admin) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_admin
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const admin_controller_get = async(req,res) => {
    try {

        const list = await admin_Services.list_admin()

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

const admin_controller_delete = async(req,res) => {
    try {

        const id = req.params.adminid
        const result = await admin_Services.delete_admin(id)

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


const admin_controller_update = async(req,res) => {
    try {
        const id = req.params.admin_id
        const data = req.body

        const result = await admin_Services.update_admin(id,data)

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
    admin_controller_post,
    admin_controller_get,
    admin_controller_delete,
    admin_controller_update
}