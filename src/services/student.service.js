const { Student } = require('../model')

const create_student = (data) => {
    return Student.create(data)
}

const list_student = () => {
    return Student.find()
}

const delete_student = (id) => {
    return Student.findByIdAndDelete(id)
}

const update_student = (id,data) => {
    return Student.findByIdAndUpdate(id,data)
}

module.exports = {
    create_student,
    list_student,
    delete_student,
    update_student
}