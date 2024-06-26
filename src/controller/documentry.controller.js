const { documentry_Services } = require("../services");

const documentry_controller_post = async(req,res) => {
    try {

        const new_documentry = await documentry_Services.create_documentry(req.body)

            if (!new_documentry) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_documentry
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const documentry_controller_get = async(req,res) => {
    try {

        const list = await documentry_Services.list_documentry()

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

const documentry_controller_delete = async(req,res) => {
    try {

        const id = req.params.documentryid
        const result = await documentry_Services.delete_documentry(id)

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


const documentry_controller_update = async(req,res) => {
    try {
        const id = req.params.documentry_id
        const data = req.body

        const result = await documentry_Services.update_documentry(id,data)

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
    documentry_controller_post,
    documentry_controller_get,
    documentry_controller_delete,
    documentry_controller_update
}