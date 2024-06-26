const express = require('express')
const { laptop_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-laptop',
    laptop_Controller.laptop_controller_post
)

router.get('/list-laptop',
    laptop_Controller.laptop_controller_get
)

router.delete('/delete-laptop/:laptopid',
    laptop_Controller.laptop_controller_delete
)

router.put('/update-laptop/:laptop_id',
    laptop_Controller.laptop_controller_update
)

module.exports = router