const fs = require('fs')
const asyncLocalStorage = require('../../services/als.service')
const logger = require('../../services/logger.service')
const gWaps = require('../../data/waps.json')
const utilService = require('../../services/util.service')
const db = '././data/waps.json'

async function getWaps() {
    const store = asyncLocalStorage.getStore()
    const { userId } = store
    try {
        const waps = gWaps.filter(wap => wap.owner === userId)
        return waps
    } catch (err) {
        logger.error('wap.service - Error to getting waps', err)
        throw err
    }
}

async function getById(wapId) {
    try {
        const wap = gWaps.find(wap => wap._id === wapId)
        if (!wap) throw new Error
        return wap
    } catch (err) {
        logger.error(`wap.service - Cannot finding wap ${wapId}`, err)
        throw err
    }
}

async function getByName(wapName) {
    try {
        const wap = gWaps.find(wap => wap.name === wapName)
        if (!wap) throw new Error
        return wap
    } catch (err) {
        logger.error(`wap.service - Cannot finding wap ${wapName}`, err)
        throw err
    }
}

async function add(wap) {
    try {
        const store = asyncLocalStorage.getStore()
        const { userId } = store
        if (userId) wap.owner = userId
        wap._id = utilService.makeId()
        gWaps.push({ ...wap })
        fs.writeFileSync(db, JSON.stringify(gWaps, null, 2))
        return wap
    } catch (err) {
        logger.error('wap.service - Cannot adding wap', err)
        throw err
    }
}

async function update(wap) {
    try {
        const store = asyncLocalStorage.getStore()
        const { userId } = store
        if (userId) wap.owner = userId
        const wapIdx = gWaps.findIndex(w => w._id === wap._id)
        gWaps[wapIdx] = wap
        fs.writeFileSync(db, JSON.stringify(gWaps, null, 2))
        return wap
    } catch (err) {
        logger.error(`wap.service - Cannot update wap ${wap._id}`, err)
        throw err
    }
}

async function remove(wapId) {
    try {
        const store = asyncLocalStorage.getStore()
        const { userId } = store
        const wapIdx = gWaps.findIndex(wap =>
            wap.owner === userId && wap._id === wapId
        )
        gWaps.splice(wapIdx, 1)
        fs.writeFileSync(db, JSON.stringify(gWaps, null, 2))
    } catch (err) {
        logger.error(`wap.service - Cannot remove wap ${wapId}`, err)
        throw err
    }
}

async function addLead(wapId, lead) {
    try {
        if (!wapId) return
        const wapIdx = gWaps.findIndex(wap => wap._id === wapId)
        if (gWaps[wapIdx]?.leads) gWaps[wapIdx].leads.push(lead)
        else gWaps[wapIdx].leads = [lead]

        fs.writeFileSync(db, JSON.stringify(gWaps, null, 2))
        return lead
    } catch (err) {
        logger.error(`wap.service - Cannot add lead to wap ${wapId}`, err)
        throw err
    }
}

module.exports = {
    getWaps,
    getById,
    getByName,
    add,
    update,
    remove,
    addLead
}