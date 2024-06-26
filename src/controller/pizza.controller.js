const { pizza_Services } = require("../services");

const pizza_controller_post = async(req,res) => {
    try {

        const new_pizza = await pizza_Services.create_pizza(req.body)

            if (!new_pizza) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_pizza
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const pizza_controller_get = async(req,res) => {
    try {

        const list = await pizza_Services.list_pizza()

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

const pizza_controller_delete = async(req,res) => {
    try {

        const id = req.params.pizzaid
        const result = await pizza_Services.delete_pizza(id)

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


const pizza_controller_update = async(req,res) => {
    try {
        const id = req.params.pizza_id
        const data = req.body

        const result = await pizza_Services.update_pizza(id,data)

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
    pizza_controller_post,
    pizza_controller_get,
    pizza_controller_delete,
    pizza_controller_update
}