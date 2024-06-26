const { Tv } = require('../model')

const create_tv = (data) => {
    return Tv.create(data)
}

const list_tv = () => {
    return Tv.find()
}

const delete_tv = (id) => {
    return Tv.findByIdAndDelete(id)
}

const update_tv = (id,data) => {
    return Tv.findByIdAndUpdate(id,data)
}

module.exports = {
    create_tv,
    list_tv,
    delete_tv,
    update_tv
}