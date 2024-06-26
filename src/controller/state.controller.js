const { state_Services } = require("../services");

const state_controller_post = async(req,res) => {
    try {

        const new_state = await state_Services.create_state(req.body)

            if (!new_state) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_state
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const state_controller_get = async(req,res) => {
    try {

        const list = await state_Services.list_state()

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

const state_controller_delete = async(req,res) => {
    try {

        const id = req.params.stateid
        const result = await state_Services.delete_state(id)

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


const state_controller_update = async(req,res) => {
    try {
        const id = req.params.state_id
        const data = req.body

        const result = await state_Services.update_state(id,data)

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
    state_controller_post,
    state_controller_get,
    state_controller_delete,
    state_controller_update
}