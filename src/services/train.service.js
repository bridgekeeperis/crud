const { Train } = require('../model')

const create_train = (data) => {
    return Train.create(data)
}

const list_train = () => {
    return Train.find()
}

const delete_train = (id) => {
    return Train.findByIdAndDelete(id)
}

const update_train = (id,data) => {
    return Train.findByIdAndUpdate(id,data)
}

module.exports = {
    create_train,
    list_train,
    delete_train,
    update_train
}