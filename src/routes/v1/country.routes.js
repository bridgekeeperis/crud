const express = require('express')
const { country_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-country',
    country_Controller.country_controller_post
)

router.get('/list-country',
    country_Controller.country_controller_get
)

router.delete('/delete-country/:countryid',
    country_Controller.country_controller_delete
)

router.put('/update-country/:country_id',
    country_Controller.country_controller_update
)

module.exports = router