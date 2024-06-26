const { Doctor } = require('../model')

const create_doctor = (data) => {
    return Doctor.create(data)
}

const list_doctor = () => {
    return Doctor.find()
}

const delete_doctor = (id) => {
    return Doctor.findByIdAndDelete(id)
}

const update_doctor = (id,data) => {
    return Doctor.findByIdAndUpdate(id,data)
}

module.exports = {
    create_doctor,
    list_doctor,
    delete_doctor,
    update_doctor
}