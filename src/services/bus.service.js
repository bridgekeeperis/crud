const { Bus } = require('../model')

const create_bus = (data) => {
    return Bus.create(data)
}

const list_bus = () => {
    return Bus.find()
}

const delete_bus = (id) => {
    return Bus.findByIdAndDelete(id)
}

const update_bus = (id,data) => {
    return Bus.findByIdAndUpdate(id,data)
}

module.exports = {
    create_bus,
    list_bus,
    delete_bus,
    update_bus
}