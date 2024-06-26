const express = require('express')
const { admin_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-admin',
    admin_Controller.admin_controller_post
)

router.get('/list-admin',
    admin_Controller.admin_controller_get
)

router.delete('/delete-admin/:adminid',
    admin_Controller.admin_controller_delete
)

router.put('/update-admin/:admin_id',
    admin_Controller.admin_controller_update
)

module.exports = router