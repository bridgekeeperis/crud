const { country_Services } = require("../services");

const country_controller_post = async(req,res) => {
    try {

        const new_country = await country_Services.create_country(req.body)

            if (!new_country) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_country
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const country_controller_get = async(req,res) => {
    try {

        const list = await country_Services.list_country()

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

const country_controller_delete = async(req,res) => {
    try {

        const id = req.params.countryid
        const result = await country_Services.delete_country(id)

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


const country_controller_update = async(req,res) => {
    try {
        const id = req.params.country_id
        const data = req.body

        const result = await country_Services.update_country(id,data)

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
    country_controller_post,
    country_controller_get,
    country_controller_delete,
    country_controller_update
}