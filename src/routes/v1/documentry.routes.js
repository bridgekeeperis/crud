const express = require('express')
const { documentry_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-documentry',
    documentry_Controller.documentry_controller_post
)

router.get('/list-documentry',
    documentry_Controller.documentry_controller_get
)

router.delete('/delete-documentry/:documentryid',
    documentry_Controller.documentry_controller_delete
)

router.put('/update-documentry/:documentry_id',
    documentry_Controller.documentry_controller_update
)

module.exports = router