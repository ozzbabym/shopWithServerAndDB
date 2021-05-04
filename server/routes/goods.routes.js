const Router = require('express')
const router = new Router()
const goodsController = require('../controller/goods.controller')

router.post('/goods', goodsController.createGoods)
router.get('/goods', goodsController.getGoods)
router.put('/goods', goodsController.updateGoods)
router.delete('/goods/:id', goodsController.deleteGoods)



module.exports = router