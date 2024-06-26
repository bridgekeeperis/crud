const express = require('express')
const { train_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-train',
    train_Controller.train_controller_post
)

router.get('/list-train',
    train_Controller.train_controller_get
)

router.delete('/delete-train/:trainid',
    train_Controller.train_controller_delete
)

router.put('/update-train/:train_id',
    train_Controller.train_controller_update
)

module.exports = router