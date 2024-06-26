const { bus_Services } = require("../services");

const bus_controller_post = async(req,res) => {
    try {

        const new_bus = await bus_Services.create_bus(req.body)

            if (!new_bus) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_bus
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const bus_controller_get = async(req,res) => {
    try {

        const list = await bus_Services.list_bus()

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

const bus_controller_delete = async(req,res) => {
    try {

        const id = req.params.busid
        const result = await bus_Services.delete_bus(id)

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


const bus_controller_update = async(req,res) => {
    try {
        const id = req.params.bus_id
        const data = req.body

        const result = await bus_Services.update_bus(id,data)

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
    bus_controller_post,
    bus_controller_get,
    bus_controller_delete,
    bus_controller_update
}