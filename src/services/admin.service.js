const { Admin } = require('../model')

const create_admin = (data) => {
    return Admin.create(data)
}

const list_admin = () => {
    return Admin.find()
}

const delete_admin = (id) => {
    return Admin.findByIdAndDelete(id)
}

const update_admin = (id,data) => {
    return Admin.findByIdAndUpdate(id,data)
}

module.exports = {
    create_admin,
    list_admin,
    delete_admin,
    update_admin
}