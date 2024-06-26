const { bike_Services } = require("../services");

const bike_controller_post = async(req,res) => {
    try {

        const new_bike = await bike_Services.create_bike(req.body)

            if (!new_bike) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_bike
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const bike_controller_get = async(req,res) => {
    try {

        const list = await bike_Services.list_bike()

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

const bike_controller_delete = async(req,res) => {
    try {

        const id = req.params.bikeid
        const result = await bike_Services.delete_bike(id)

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


const bike_controller_update = async(req,res) => {
    try {
        const id = req.params.bike_id
        const data = req.body

        const result = await bike_Services.update_bike(id,data)

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
    bike_controller_post,
    bike_controller_get,
    bike_controller_delete,
    bike_controller_update
}