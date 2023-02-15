const router = require('express').Router()
const resortsCtrl = require('../controllers/resorts.js')

router.post('/', resortsCtrl.create)
router.get('/', resortsCtrl.index)
router.get('/:id', resortsCtrl.show)
router.put('/:id', resortsCtrl.update)
router.delete('/:id', resortsCtrl.delete)

module.exports = router
