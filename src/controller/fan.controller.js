const { fan_Services } = require("../services");

const fan_controller_post = async(req,res) => {
    try {

        const new_fan = await fan_Services.create_fan(req.body)

            if (!new_fan) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_fan
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const fan_controller_get = async(req,res) => {
    try {

        const list = await fan_Services.list_fan()

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

const fan_controller_delete = async(req,res) => {
    try {

        const id = req.params.fanid
        const result = await fan_Services.delete_fan(id)

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


const fan_controller_update = async(req,res) => {
    try {
        const id = req.params.fan_id
        const data = req.body

        const result = await fan_Services.update_fan(id,data)

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
    fan_controller_post,
    fan_controller_get,
    fan_controller_delete,
    fan_controller_update
}