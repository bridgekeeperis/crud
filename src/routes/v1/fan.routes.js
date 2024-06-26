const express = require('express')
const { fan_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-fan',
    fan_Controller.fan_controller_post
)

router.get('/list-fan',
    fan_Controller.fan_controller_get
)

router.delete('/delete-fan/:fanid',
    fan_Controller.fan_controller_delete
)

router.put('/update-fan/:fan_id',
    fan_Controller.fan_controller_update
)

module.exports = router