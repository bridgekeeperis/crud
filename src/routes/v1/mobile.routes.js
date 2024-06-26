const express = require('express')
const { mobile_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-mobile',
    mobile_Controller.mobile_controller_post
)

router.get('/list-mobile',
    mobile_Controller.mobile_controller_get
)

router.delete('/delete-mobile/:mobileid',
    mobile_Controller.mobile_controller_delete
)

router.put('/update-mobile/:mobile_id',
    mobile_Controller.mobile_controller_update
)

module.exports = router