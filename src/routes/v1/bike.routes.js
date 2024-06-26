const express = require('express')
const { bike_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-bike',
    bike_Controller.bike_controller_post
)

router.get('/list-bike',
    bike_Controller.bike_controller_get
)

router.delete('/delete-bike/:bikeid',
    bike_Controller.bike_controller_delete
)

router.put('/update-bike/:bike_id',
    bike_Controller.bike_controller_update
)

module.exports = router