const { School } = require('../model')

const create_school = (data) => {
    return School.create(data)
}

const list_school = () => {
    return School.find()
}

const delete_school = (id) => {
    return School.findByIdAndDelete(id)
}

const update_school = (id,data) => {
    return School.findByIdAndUpdate(id,data)
}

module.exports = {
    create_school,
    list_school,
    delete_school,
    update_school
}