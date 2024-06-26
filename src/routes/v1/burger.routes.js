const express = require('express')
const { burger_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-burger',
    burger_Controller.burger_controller_post
)

router.get('/list-burger',
    burger_Controller.burger_controller_get
)

router.delete('/delete-burger/:burgerid',
    burger_Controller.burger_controller_delete
)

router.put('/update-burger/:burger_id',
    burger_Controller.burger_controller_update
)

module.exports = router