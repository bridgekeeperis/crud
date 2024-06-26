const express = require('express')
const { pizza_Controller } = require('../../controller')

const router = express.Router()

router.post('/create-pizza',
    pizza_Controller.pizza_controller_post
)

router.get('/list-pizza',
    pizza_Controller.pizza_controller_get
)

router.delete('/delete-pizza/:pizzaid',
    pizza_Controller.pizza_controller_delete
)

router.put('/update-pizza/:pizza_id',
    pizza_Controller.pizza_controller_update
)

module.exports = router