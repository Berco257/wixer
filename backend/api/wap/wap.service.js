const fs = require('fs')
const asyncLocalStorage = require('../../services/als.service')
const logger = require('../../services/logger.service')
const db = '../../data/waps.json'
const gWaps = JSON.parse(require(db))

async function getWaps() {
    const store = asyncLocalStorage.getStore()
    const { userId } = store
    try {
        const waps = JSON.parse(JSON.stringify(await gWaps.filter(wap => wap.owner === userId)))
        return waps
    } catch (err) {
        logger.error('Error to getting waps', err)
        throw err
    }
}

async function getById(wapId) {
    try {
        const wap = JSON.parse(JSON.stringify(await gWaps.find(wap => wap._id === wapId)))
        if (!wap) throw new Error
        return wap
    } catch (err) {
        logger.error(`Cannot finding wap ${wapId}`, err)
        throw err
    }
}

async function getByName(wapName) {
    try {
        const wap = JSON.parse(JSON.stringify(await gWaps.find(wap => wap.name === wapName)))
        if (!wap) throw new Error
        return wap
    } catch (err) {
        logger.error(`Cannot finding wap ${wapName}`, err)
        throw err
    }
}

async function add(wap) {
    try {
        const store = asyncLocalStorage.getStore()
        const { userId } = store
        if (userId) wap.owner = userId
        gWaps.push({ ...wap })
        fs.writeFileSync(db, JSON.stringify(gWaps))
        return JSON.parse(JSON.stringify(wap))
    } catch (err) {
        logger.error('Cannot add wap', err)
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
        fs.writeFileSync(db, JSON.stringify(gWaps))
        return JSON.parse(JSON.stringify(wap))
    } catch (err) {
        logger.error(`Cannot update wap ${wap._id}`, err)
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
        fs.writeFileSync(db, JSON.stringify(gWaps))
    } catch (err) {
        logger.error(`Cannot remove wap ${wapId}`, err)
        throw err
    }
}

async function addLead(wapName, lead) {
    try {
        const wapIdx = gWaps.findIndex(wap => wap.name === wapName)
        gWaps[wapIdx].leads.push(lead)
        fs.writeFileSync(db, JSON.stringify(gWaps))
        return lead
    } catch (err) {
        logger.error(`Cannot add lead to ${wapName} wap`, err)
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