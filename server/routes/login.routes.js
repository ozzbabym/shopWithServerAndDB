const Router = require('express')
const router = new Router()
const loginController = require('../controller/login.controller')

router.post('/login', loginController.loginUser)




module.exports = router