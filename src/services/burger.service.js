const { Burger } = require('../model')

const create_burger = (data) => {
    return Burger.create(data)
}

const list_burger = () => {
    return Burger.find()
}

const delete_burger = (id) => {
    return Burger.findByIdAndDelete(id)
}

const update_burger = (id,data) => {
    return Burger.findByIdAndUpdate(id,data)
}

module.exports = {
    create_burger,
    list_burger,
    delete_burger,
    update_burger
}