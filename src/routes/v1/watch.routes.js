const express = require('express')
const { watch_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-watch',
    watch_Controller.watch_controller_post
)

router.get('/list-watch',
    watch_Controller.watch_controller_get
)

router.delete('/delete-watch/:watchid',
    watch_Controller.watch_controller_delete
)

router.put('/update-watch/:watch_id',
    watch_Controller.watch_controller_update
)

module.exports = router