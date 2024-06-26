const { Car } = require('../model')

const create_car = (data) => {
    return Car.create(data)
}

const list_car = () => {
    return Car.find()
}

const delete_car = (id) => {
    return Car.findByIdAndDelete(id)
}

const update_car = (id,data) => {
    return Car.findByIdAndUpdate(id,data)
}

module.exports = {
    create_car,
    list_car,
    delete_car,
    update_car
}