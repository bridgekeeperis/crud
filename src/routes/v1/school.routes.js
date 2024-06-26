const express = require('express')
const { school_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-school',
    school_Controller.school_controller_post
)

router.get('/list-school',
    school_Controller.school_controller_get
)

router.delete('/delete-school/:schoolid',
    school_Controller.school_controller_delete
)

router.put('/update-school/:school_id',
    school_Controller.school_controller_update
)

module.exports = router