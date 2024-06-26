const { City } = require('../model')

const create_city = (data) => {
    return City.create(data)
}

const list_city = () => {
    return City.find()
}

const delete_city = (id) => {
    return City.findByIdAndDelete(id)
}

const update_city = (id,data) => {
    return City.findByIdAndUpdate(id,data)
}

module.exports = {
    create_city,
    list_city,
    delete_city,
    update_city
}