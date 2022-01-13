const express = require('express')
const requireAuth = require('../../middlewares/requireAuth.middleware')
const {addWap, getWap,updateWap, deleteWap, getWaps} = require('')

const router = express.Router()

router.get('/waps', requireAuth, getWaps)
router.get('/', getWap)
router.post('/', addWap)
router.put('/:id', updateWap)
router.delete('/:id', requireAuth, deleteWap)

module.exports = router