const { bank_Services } = require("../services");

const bank_controller_post = async(req,res) => {
    try {

        const new_bank = await bank_Services.create_bank(req.body)

            if (!new_bank) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_bank
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const bank_controller_get = async(req,res) => {
    try {

        const list = await bank_Services.list_bank()

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

const bank_controller_delete = async(req,res) => {
    try {

        const id = req.params.bankid
        const result = await bank_Services.delete_bank(id)

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


const bank_controller_update = async(req,res) => {
    try {
        const id = req.params.bank_id
        const data = req.body

        const result = await bank_Services.update_bank(id,data)

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
    bank_controller_post,
    bank_controller_get,
    bank_controller_delete,
    bank_controller_update
}