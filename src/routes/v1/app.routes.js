const express = require('express')
const { app_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-app',
    app_Controller.app_controller_post
)

router.get('/list-app',
    app_Controller.app_controller_get
)

router.delete('/delete-app/:appid',
    app_Controller.app_controller_delete
)

router.put('/update-app/:app_id',
    app_Controller.app_controller_update
)

module.exports = router