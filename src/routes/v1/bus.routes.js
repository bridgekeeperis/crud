const express = require('express')
const { bus_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-bus',
    bus_Controller.bus_controller_post
)

router.get('/list-bus',
    bus_Controller.bus_controller_get
)

router.delete('/delete-bus/:busid',
    bus_Controller.bus_controller_delete
)

router.put('/update-bus/:bus_id',
    bus_Controller.bus_controller_update
)

module.exports = router