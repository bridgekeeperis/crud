const movieRoutes = require('./movie.routes')
const seriesRoutes = require('./series.routes')
const adminRoutes = require('./admin.routes')
const userRoutes = require('./user.routes')
const documentryRoutes = require('./documentry.routes')
const cityRoutes = require('./city.routes')
const stateRoutes = require('./state.routes')
const carRoutes = require('./car.routes')
const bikeRoutes = require('./bike.routes')
const pizzaRoutes = require('./pizza.routes')
const burgerRoutes = require('./burger.routes')
const doctorRoutes = require('./doctor.routes')
const studentRoutes = require('./student.routes')
const tvRoutes = require('./tv.routes')
const mobileRoutes = require('./mobile.routes')
const laptopRoutes = require('./laptop.routes')
const fanRoutes = require('./fan.routes')
const trainRoutes = require('./train.routes')
const busRoutes = require('./bus.routes')
const watchRoutes = require('./watch.routes')
const countryRoutes = require('./country.routes')
const schoolRoutes = require('./school.routes')
const cycleRoutes = require('./cycle.routes')
const appRoutes = require('./app.routes')
const bankRoutes = require('./bank.routes')







const express = require("express")
const router = express.Router()

router.use('/movie',movieRoutes)
router.use('/series',seriesRoutes)
router.use('/admin',adminRoutes)
router.use('/user',userRoutes)
router.use('/documentry',documentryRoutes)
router.use('/city',cityRoutes)
router.use('/state',stateRoutes)
router.use('/car',carRoutes)
router.use('/bike',bikeRoutes)
router.use('/pizza',pizzaRoutes)
router.use('/burger',burgerRoutes)
router.use('/doctor',doctorRoutes)
router.use('/student',studentRoutes)
router.use('/tv',tvRoutes)
router.use('/mobile',mobileRoutes)
router.use('/laptop',laptopRoutes)
router.use('/fan',fanRoutes)
router.use('/train',trainRoutes)
router.use('/bus',busRoutes)
router.use('/watch',watchRoutes)
router.use('/country',countryRoutes)
router.use('/school',schoolRoutes)
router.use('/cycle',cycleRoutes)
router.use('/app',appRoutes)
router.use('/bank',bankRoutes)

























module.exports = router