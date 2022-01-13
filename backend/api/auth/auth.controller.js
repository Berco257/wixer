const authService = require('')
const logger = require('../../services/logger.service')

async function login(req, res) {
    const { username, password } = req.body
    try {
        const user = await authService.login(username, password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        logger.error(`Failed to Login ${err}`)
        res.status(401).send({ err: 'Failed to login' })
    }
}

async function signup(req, res) {
    const { username, password, fullname } = req.body
    try {
        const account = await authService.signup(username, password, fullname)
        logger.debug(`auth.controller - new account created: ${JSON.stringify(account)}`)
        const user = await authService.login(username, password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        logger.error(`Failed to signup ${err}`)
        res.status(500).send({ err: 'Failed to signup' })
    }
}

async function logout(req, res) {
    try {
        req.session.user = null
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        res.status(500).send({ err: 'Failed to logout' })
    }
}

module.exports = {
    login,
    signup,
    logout
}