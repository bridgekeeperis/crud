const express = require('express')
const { user_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-user',
    user_Controller.user_controller_post
)

router.get('/list-user',
    user_Controller.user_controller_get
)

router.delete('/delete-user/:userid',
    user_Controller.user_controller_delete
)

router.put('/update-user/:user_id',
    user_Controller.user_controller_update
)

module.exports = router