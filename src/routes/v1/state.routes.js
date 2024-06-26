const express = require('express')
const { state_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-state',
    state_Controller.state_controller_post
)

router.get('/list-state',
    state_Controller.state_controller_get
)

router.delete('/delete-state/:stateid',
    state_Controller.state_controller_delete
)

router.put('/update-state/:state_id',
    state_Controller.state_controller_update
)

module.exports = router