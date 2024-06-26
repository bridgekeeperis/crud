const { train_Services } = require("../services");

const train_controller_post = async(req,res) => {
    try {

        const new_train = await train_Services.create_train(req.body)

            if (!new_train) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_train
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const train_controller_get = async(req,res) => {
    try {

        const list = await train_Services.list_train()

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

const train_controller_delete = async(req,res) => {
    try {

        const id = req.params.trainid
        const result = await train_Services.delete_train(id)

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


const train_controller_update = async(req,res) => {
    try {
        const id = req.params.train_id
        const data = req.body

        const result = await train_Services.update_train(id,data)

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
    train_controller_post,
    train_controller_get,
    train_controller_delete,
    train_controller_update
}