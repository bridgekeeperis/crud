const { city_Services } = require("../services");

const city_controller_post = async(req,res) => {
    try {

        const new_city = await city_Services.create_city(req.body)

            if (!new_city) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_city
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const city_controller_get = async(req,res) => {
    try {

        const list = await city_Services.list_city()

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

const city_controller_delete = async(req,res) => {
    try {

        const id = req.params.cityid
        const result = await city_Services.delete_city(id)

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


const city_controller_update = async(req,res) => {
    try {
        const id = req.params.city_id
        const data = req.body

        const result = await city_Services.update_city(id,data)

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
    city_controller_post,
    city_controller_get,
    city_controller_delete,
    city_controller_update
}