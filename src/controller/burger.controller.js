const { burger_Services } = require("../services");

const burger_controller_post = async(req,res) => {
    try {

        const new_burger = await burger_Services.create_burger(req.body)

            if (!new_burger) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_burger
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const burger_controller_get = async(req,res) => {
    try {

        const list = await burger_Services.list_burger()

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

const burger_controller_delete = async(req,res) => {
    try {

        const id = req.params.burgerid
        const result = await burger_Services.delete_burger(id)

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


const burger_controller_update = async(req,res) => {
    try {
        const id = req.params.burger_id
        const data = req.body

        const result = await burger_Services.update_burger(id,data)

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
    burger_controller_post,
    burger_controller_get,
    burger_controller_delete,
    burger_controller_update
}