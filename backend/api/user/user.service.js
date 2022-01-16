const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')

async function getByUsername(username) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ username })
        return user
    } catch (err) {
        logger.error(`user.service - Cannot find user ${username}`, err)
        throw err
    }
}

async function add(user) {
    let isUsernameAvailable = false
    try {
        const username = await getByUsername(user.username)
        if (!username) throw err
    } catch (err) {
        isUsernameAvailable = true
    }

    if (!isUsernameAvailable) throw ('Username is not available.')

    try {
        const userToAdd = {
            username: user.username,
            password: user.password,
            fullname: user.fullname
        }
        const collection = await dbService.getCollection('user')
        await collection.insertOne(userToAdd)
        return userToAdd
    } catch (err) {
        logger.error('user.service - Cannot add user', err)
        throw err
    }
}

module.exports = {
    getByUsername,
    add
}