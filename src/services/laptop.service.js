const { Laptop } = require('../model')

const create_laptop = (data) => {
    return Laptop.create(data)
}

const list_laptop = () => {
    return Laptop.find()
}

const delete_laptop = (id) => {
    return Laptop.findByIdAndDelete(id)
}

const update_laptop = (id,data) => {
    return Laptop.findByIdAndUpdate(id,data)
}

module.exports = {
    create_laptop,
    list_laptop,
    delete_laptop,
    update_laptop
}