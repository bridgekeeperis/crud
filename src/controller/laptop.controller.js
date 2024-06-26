const { laptop_Services } = require("../services");

const laptop_controller_post = async(req,res) => {
    try {

        const new_laptop = await laptop_Services.create_laptop(req.body)

            if (!new_laptop) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_laptop
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const laptop_controller_get = async(req,res) => {
    try {

        const list = await laptop_Services.list_laptop()

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

const laptop_controller_delete = async(req,res) => {
    try {

        const id = req.params.laptopid
        const result = await laptop_Services.delete_laptop(id)

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


const laptop_controller_update = async(req,res) => {
    try {
        const id = req.params.laptop_id
        const data = req.body

        const result = await laptop_Services.update_laptop(id,data)

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
    laptop_controller_post,
    laptop_controller_get,
    laptop_controller_delete,
    laptop_controller_update
}