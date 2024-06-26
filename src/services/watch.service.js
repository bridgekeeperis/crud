const { Watch } = require('../model')

const create_watch = (data) => {
    return Watch.create(data)
}

const list_watch = () => {
    return Watch.find()
}

const delete_watch = (id) => {
    return Watch.findByIdAndDelete(id)
}

const update_watch = (id,data) => {
    return Watch.findByIdAndUpdate(id,data)
}

module.exports = {
    create_watch,
    list_watch,
    delete_watch,
    update_watch
}