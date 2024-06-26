const { Mobile } = require('../model')

const create_mobile = (data) => {
    return Mobile.create(data)
}

const list_mobile = () => {
    return Mobile.find()
}

const delete_mobile = (id) => {
    return Mobile.findByIdAndDelete(id)
}

const update_mobile = (id,data) => {
    return Mobile.findByIdAndUpdate(id,data)
}

module.exports = {
    create_mobile,
    list_mobile,
    delete_mobile,
    update_mobile
}