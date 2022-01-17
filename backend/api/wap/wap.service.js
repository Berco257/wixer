const ObjectId = require('mongodb').ObjectId
const dbService = require('../../services/db.service')
const asyncLocalStorage = require('../../services/als.service')
const logger = require('../../services/logger.service')

async function getWaps() {
    const store = asyncLocalStorage.getStore()
    const { userId } = store
    try {
        const collection = await dbService.getCollection('wap')
        let waps = await collection.find({ owner: ObjectId(userId) }).toArray()
        waps = waps.map(wap => {
            wap.createdAt = wap._id.getTimestamp()
            return wap
        })
        return waps
    } catch (err) {
        logger.error('wap.service - Error to getting waps', err)
        throw err
    }
}

async function getById(wapId) {
    try {
        const collection = await dbService.getCollection('wap')
        const wap = await collection.findOne({ '_id': ObjectId(wapId) })
        if (!wap) throw new Error
        return wap
    } catch (err) {
        logger.error(`wap.service - Cannot finding wap ${wapId}`, err)
        throw err
    }
}

async function getByName(wapName) {
    try {
        const collection = await dbService.getCollection('wap')
        const wap = await collection.findOne({ 'name': wapName })
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
        if (userId) wap.owner = ObjectId(userId)
        const collection = await dbService.getCollection('wap')
        await collection.insertOne(wap)
        return wap
    } catch (err) {
        logger.error('wap.service - Cannot adding wap', err)
        throw err
    }
}

async function update(wap) {
    try {
        wap._id = ObjectId(wap._id)
        const store = asyncLocalStorage.getStore()
        const { userId } = store
        if (userId) wap.owner = ObjectId(userId)

        const collection = await dbService.getCollection('wap')
        await collection.updateOne({ _id: wap._id }, { $set: wap })
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
        const collection = await dbService.getCollection('wap')
        await collection.deleteOne({ '_id': ObjectId(wapId), 'owner': ObjectId(userId) })
    } catch (err) {
        logger.error(`wap.service - Cannot remove wap ${wapId}`, err)
        throw err
    }
}

async function addLead(wapId, lead) {
    try {
        if (!wapId) return
        const collection = await dbService.getCollection('wap')
        await collection.updateOne({ '_id': ObjectId(wapId) }, { $push: { leads: lead } })
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