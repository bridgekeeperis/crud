const { State } = require('../model')

const create_state = (data) => {
    return State.create(data)
}

const list_state = () => {
    return State.find()
}

const delete_state = (id) => {
    return State.findByIdAndDelete(id)
}

const update_state = (id,data) => {
    return State.findByIdAndUpdate(id,data)
}

module.exports = {
    create_state,
    list_state,
    delete_state,
    update_state
}