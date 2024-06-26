const express = require('express')
const { city_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-city',
    city_Controller.city_controller_post
)

router.get('/list-city',
    city_Controller.city_controller_get
)

router.delete('/delete-city/:cityid',
    city_Controller.city_controller_delete
)

router.put('/update-city/:city_id',
    city_Controller.city_controller_update
)

module.exports = router