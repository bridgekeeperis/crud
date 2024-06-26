const { tv_Services } = require("../services");

const tv_controller_post = async(req,res) => {
    try {

        const new_tv = await tv_Services.create_tv(req.body)

            if (!new_tv) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_tv
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const tv_controller_get = async(req,res) => {
    try {

        const list = await tv_Services.list_tv()

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

const tv_controller_delete = async(req,res) => {
    try {

        const id = req.params.tvid
        const result = await tv_Services.delete_tv(id)

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


const tv_controller_update = async(req,res) => {
    try {
        const id = req.params.tv_id
        const data = req.body

        const result = await tv_Services.update_tv(id,data)

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
    tv_controller_post,
    tv_controller_get,
    tv_controller_delete,
    tv_controller_update
}