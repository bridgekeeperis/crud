const { Cycle } = require('../model')

const create_cycle = (data) => {
    return Cycle.create(data)
}

const list_cycle = () => {
    return Cycle.find()
}

const delete_cycle = (id) => {
    return Cycle.findByIdAndDelete(id)
}

const update_cycle = (id,data) => {
    return Cycle.findByIdAndUpdate(id,data)
}

module.exports = {
    create_cycle,
    list_cycle,
    delete_cycle,
    update_cycle
}