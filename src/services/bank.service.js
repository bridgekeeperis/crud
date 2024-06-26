const { Bank } = require('../model')

const create_bank = (data) => {
    return Bank.create(data)
}

const list_bank = () => {
    return Bank.find()
}

const delete_bank = (id) => {
    return Bank.findByIdAndDelete(id)
}

const update_bank = (id,data) => {
    return Bank.findByIdAndUpdate(id,data)
}

module.exports = {
    create_bank,
    list_bank,
    delete_bank,
    update_bank
}