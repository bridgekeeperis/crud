const { Documentry } = require('../model')

const create_documentry = (data) => {
    return Documentry.create(data)
}

const list_documentry = () => {
    return Documentry.find()
}

const delete_documentry = (id) => {
    return Documentry.findByIdAndDelete(id)
}

const update_documentry = (id,data) => {
    return Documentry.findByIdAndUpdate(id,data)
}

module.exports = {
    create_documentry,
    list_documentry,
    delete_documentry,
    update_documentry
}