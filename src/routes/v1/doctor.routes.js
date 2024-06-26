const express = require('express')
const { doctor_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-doctor',
    doctor_Controller.doctor_controller_post
)

router.get('/list-doctor',
    doctor_Controller.doctor_controller_get
)

router.delete('/delete-doctor/:doctorid',
    doctor_Controller.doctor_controller_delete
)

router.put('/update-doctor/:doctor_id',
    doctor_Controller.doctor_controller_update
)

module.exports = router