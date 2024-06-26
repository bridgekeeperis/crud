const { user_Services } = require("../services");

const user_controller_post = async(req,res) => {
    try {

        const new_user = await user_Services.create_user(req.body)

            if (!new_user) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const user_controller_get = async(req,res) => {
    try {

        const list = await user_Services.list_user()

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

const user_controller_delete = async(req,res) => {
    try {

        const id = req.params.userid
        const result = await user_Services.delete_user(id)

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


const user_controller_update = async(req,res) => {
    try {
        const id = req.params.user_id
        const data = req.body

        const result = await user_Services.update_user(id,data)

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
    user_controller_post,
    user_controller_get,
    user_controller_delete,
    user_controller_update
}