const { Country } = require('../model')

const create_country = (data) => {
    return Country.create(data)
}

const list_country = () => {
    return Country.find()
}

const delete_country = (id) => {
    return Country.findByIdAndDelete(id)
}

const update_country = (id,data) => {
    return Country.findByIdAndUpdate(id,data)
}

module.exports = {
    create_country,
    list_country,
    delete_country,
    update_country
}