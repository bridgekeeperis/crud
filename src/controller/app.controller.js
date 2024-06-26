const { app_Services } = require("../services");

const app_controller_post = async(req,res) => {
    try {

        const new_app = await app_Services.create_app(req.body)

            if (!new_app) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_app
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const app_controller_get = async(req,res) => {
    try {

        const list = await app_Services.list_app()

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

const app_controller_delete = async(req,res) => {
    try {

        const id = req.params.appid
        const result = await app_Services.delete_app(id)

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


const app_controller_update = async(req,res) => {
    try {
        const id = req.params.app_id
        const data = req.body

        const result = await app_Services.update_app(id,data)

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
    app_controller_post,
    app_controller_get,
    app_controller_delete,
    app_controller_update
}