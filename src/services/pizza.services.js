const { Pizza } = require('../model')

const create_pizza = (data) => {
    return Pizza.create(data)
}

const list_pizza = () => {
    return Pizza.find()
}

const delete_pizza = (id) => {
    return Pizza.findByIdAndDelete(id)
}

const update_pizza = (id,data) => {
    return Pizza.findByIdAndUpdate(id,data)
}

module.exports = {
    create_pizza,
    list_pizza,
    delete_pizza,
    update_pizza
}