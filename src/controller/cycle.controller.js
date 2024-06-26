const { cycle_Services } = require("../services");

const cycle_controller_post = async(req,res) => {
    try {

        const new_cycle = await cycle_Services.create_cycle(req.body)

            if (!new_cycle) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_cycle
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const cycle_controller_get = async(req,res) => {
    try {

        const list = await cycle_Services.list_cycle()

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

const cycle_controller_delete = async(req,res) => {
    try {

        const id = req.params.cycleid
        const result = await cycle_Services.delete_cycle(id)

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


const cycle_controller_update = async(req,res) => {
    try {
        const id = req.params.cycle_id
        const data = req.body

        const result = await cycle_Services.update_cycle(id,data)

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
    cycle_controller_post,
    cycle_controller_get,
    cycle_controller_delete,
    cycle_controller_update
}