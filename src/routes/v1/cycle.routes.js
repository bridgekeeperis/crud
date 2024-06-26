const express = require('express')
const { cycle_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-cycle',
    cycle_Controller.cycle_controller_post
)

router.get('/list-cycle',
    cycle_Controller.cycle_controller_get
)

router.delete('/delete-cycle/:cycleid',
    cycle_Controller.cycle_controller_delete
)

router.put('/update-cycle/:cycle_id',
    cycle_Controller.cycle_controller_update
)

module.exports = router