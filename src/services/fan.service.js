const { Fan } = require('../model')

const create_fan = (data) => {
    return Fan.create(data)
}

const list_fan = () => {
    return Fan.find()
}

const delete_fan = (id) => {
    return Fan.findByIdAndDelete(id)
}

const update_fan = (id,data) => {
    return Fan.findByIdAndUpdate(id,data)
}

module.exports = {
    create_fan,
    list_fan,
    delete_fan,
    update_fan
}