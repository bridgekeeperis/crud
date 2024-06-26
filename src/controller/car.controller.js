const { car_Services } = require("../services");

const car_controller_post = async(req,res) => {
    try {

        const new_car = await car_Services.create_car(req.body)

            if (!new_car) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_car
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const car_controller_get = async(req,res) => {
    try {

        const list = await car_Services.list_car()

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

const car_controller_delete = async(req,res) => {
    try {

        const id = req.params.carid
        const result = await car_Services.delete_car(id)

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


const car_controller_update = async(req,res) => {
    try {
        const id = req.params.car_id
        const data = req.body

        const result = await car_Services.update_car(id,data)

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
    car_controller_post,
    car_controller_get,
    car_controller_delete,
    car_controller_update
}