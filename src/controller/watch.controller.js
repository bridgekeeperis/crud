const { watch_Services } = require("../services");

const watch_controller_post = async(req,res) => {
    try {

        const new_watch = await watch_Services.create_watch(req.body)

            if (!new_watch) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_watch
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const watch_controller_get = async(req,res) => {
    try {

        const list = await watch_Services.list_watch()

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

const watch_controller_delete = async(req,res) => {
    try {

        const id = req.params.watchid
        const result = await watch_Services.delete_watch(id)

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


const watch_controller_update = async(req,res) => {
    try {
        const id = req.params.watch_id
        const data = req.body

        const result = await watch_Services.update_watch(id,data)

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
    watch_controller_post,
    watch_controller_get,
    watch_controller_delete,
    watch_controller_update
}