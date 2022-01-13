const bcrypt = require('bcrypt')
const userService = require('')
const logger = require('../../services/logger.service')

async function login(username, password) {
    logger.debug(`auth.service - login with username: ${username}`)

    const user = await userService.getByUsername(username)
    if (!user) return Promise.reject('Invalid username or password')

    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid username or password')

    delete user.password
    user._id = user._id.toString()
    return user
}

async function signup(username, password, fullname) {
    if (!username || !password || !fullname) return Promise.reject('fullname, username and password are required!')

    const saltRounds = 10
    const hash = await bcrypt.hash(password, saltRounds)

    logger.debug(`auth.service - signup with username: ${username}, fullname: ${fullname}`)
    return userService.add({ username, password: hash, fullname })
}

module.exports = {
    login,
    signup
}