
const fs = require('fs')
const logger = require('../../services/logger.service')
const gUsers = JSON.parse(require('../../data/users.json'))

async function getById(userId) {
    try {
        let user = gUsers.find(user => user._id === userId)
        if (user) {
            user = { ...user }
            delete user.password
        }
        return user
    } catch (err) {
        logger.error(`while finding user ${userId}`, err)
        throw err
    }
}

async function getByUsername(username) {
    try {
        let user = gUsers.find(user => user.username === username)
        if (user) {
            user = { ...user }
            delete user.password
        }
        return user
    } catch (err) {
        logger.error(`while finding user ${userId}`, err)
        throw err
    }
}

async function add(user) {
    const userToAdd = { ...user }
    gUsers.push(userToAdd)
    try {
        fs.writeFileSync('../../data/users.json', JSON.stringify(gUsers))
        return userToAdd
    } catch (err) {
        logger.error('cannot add user', err)
        throw err
    }
}

module.exports = {
    getById,
    getByUsername,
    add
}