const express = require('express')
const { car_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-car',
    car_Controller.car_controller_post
)

router.get('/list-car',
    car_Controller.car_controller_get
)

router.delete('/delete-car/:carid',
    car_Controller.car_controller_delete
)

router.put('/update-car/:car_id',
    car_Controller.car_controller_update
)

module.exports = router