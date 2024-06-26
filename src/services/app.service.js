const { App } = require('../model')

const create_app = (data) => {
    return App.create(data)
}

const list_app = () => {
    return App.find()
}

const delete_app = (id) => {
    return App.findByIdAndDelete(id)
}

const update_app = (id,data) => {
    return App.findByIdAndUpdate(id,data)
}

module.exports = {
    create_app,
    list_app,
    delete_app,
    update_app
}