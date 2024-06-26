const { mobile_Services } = require("../services");

const mobile_controller_post = async(req,res) => {
    try {

        const new_mobile = await mobile_Services.create_mobile(req.body)

            if (!new_mobile) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_mobile
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const mobile_controller_get = async(req,res) => {
    try {

        const list = await mobile_Services.list_mobile()

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

const mobile_controller_delete = async(req,res) => {
    try {

        const id = req.params.mobileid
        const result = await mobile_Services.delete_mobile(id)

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


const mobile_controller_update = async(req,res) => {
    try {
        const id = req.params.mobile_id
        const data = req.body

        const result = await mobile_Services.update_mobile(id,data)

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
    mobile_controller_post,
    mobile_controller_get,
    mobile_controller_delete,
    mobile_controller_update
}