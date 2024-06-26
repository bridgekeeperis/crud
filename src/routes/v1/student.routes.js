const express = require('express')
const { student_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-student',
    student_Controller.student_controller_post
)

router.get('/list-student',
    student_Controller.student_controller_get
)

router.delete('/delete-student/:studentid',
    student_Controller.student_controller_delete
)

router.put('/update-student/:student_id',
    student_Controller.student_controller_update
)

module.exports = router