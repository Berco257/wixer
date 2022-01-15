const fs = require('fs')
const logger = require('../../services/logger.service')
const gUsers = require('../../data/users.json')
const utilService = require('../../services/util.service')

async function getByUsername(username) {
    try {
        let user = gUsers.find(user => user.username === username)
        if (user) user = { ...user }
        return user
    } catch (err) {
        logger.error(`user.service - Cannot find user ${userId}`, err)
        throw err
    }
}

async function add(user) {
    const userToAdd = { ...user }
    userToAdd._id = utilService.makeId(9)
    gUsers.push(userToAdd)
    try {
        fs.writeFileSync('././data/users.json', JSON.stringify(gUsers, null, 2))
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