const express = require('express')
const { tv_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-tv',
    tv_Controller.tv_controller_post
)

router.get('/list-tv',
    tv_Controller.tv_controller_get
)

router.delete('/delete-tv/:tvid',
    tv_Controller.tv_controller_delete
)

router.put('/update-tv/:tv_id',
    tv_Controller.tv_controller_update
)

module.exports = router