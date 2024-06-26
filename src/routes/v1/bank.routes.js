const express = require('express')
const { bank_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-bank',
    bank_Controller.bank_controller_post
)

router.get('/list-bank',
    bank_Controller.bank_controller_get
)

router.delete('/delete-bank/:bankid',
    bank_Controller.bank_controller_delete
)

router.put('/update-bank/:bank_id',
    bank_Controller.bank_controller_update
)

module.exports = router