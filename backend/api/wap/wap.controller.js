const wapService = require('./wap.service')
const logger = require('../../services/logger.service')

// GET (get all waps)
async function getWaps(req, res) {
    try {
        const waps = await wapService.getWaps()
        res.send(waps)
    } catch (err) {
        logger.error('Failed to get waps', err)
        res.status(500).send({ err: 'Failed to get waps' })
    }
}

// GET (get wap)
async function getWap(req, res) {
    try {
        let wap
        if (req.query.wapId) wap = await wapService.getById(req.query.wapId)
        else wap = await wapService.getByName(req.query.wapName)
    } catch (err) {
        logger.error('Failed to get wap', err)
        res.status(500).send({ err: 'Failed to get wap' })
    }
}

// POST (add wap)
async function addWap(req, res) {
    try {
        const wap = req.body
        const addedWap = await wapService.add(wap)
        res.json(addedWap)
    } catch (err) {
        logger.error('Failed to add wap', err)
        res.status(500).send({ err: 'Failed to add wap' })
    }
}

// PUT (update wap)
async function updateWap(req, res) {
    try {
        const wap = req.body
        const savedWap = await wapService.update(wap)
        res.send(savedWap)
    } catch (err) {
        logger.error('Failed to update wap', err)
        res.status(500).send({ err: 'Failed to update wap' })
    }
}

// DELETE (delete wap)

async function deleteWap(req, res) {
    try {
        const wapId = req.params.wapId
        await wapService.remove(wapId)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete wap', err)
        res.status(500).send({ err: 'Failed to delete wap' })
    }
}

module.exports = {
    getWaps,
    getWap,
    addWap,
    updateWap,
    deleteWap
}