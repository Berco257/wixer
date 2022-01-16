const fs = require('fs')
const asyncLocalStorage = require('./als.service')

const logsDir = './logs'
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir)
}

function getTime() {
    let now = new Date()
    return now.toLocaleString()
}

function isError(err) {
    return err && err.stack && err.message
}

function doLog(level, ...args) {
    const strs = args.map(arg =>
        (typeof arg === 'string' || isError(arg)) ? arg : JSON.stringify(arg)
    )

    let line = strs.join(' | ')
    const store = asyncLocalStorage.getStore()
    const sessionId = store?.sessionId
    const sid = sessionId ? `(sid: ${sessionId})` : ''
    line = `${getTime()} - ${level} - ${line} ${sid}\n`
    fs.appendFileSync(`${logsDir}/backend.log`, line)
}

module.exports = {
    debug(...args) {
        doLog('DEBUG', ...args)
    },
    info(...args) {
        doLog('INFO', ...args)
    },
    warn(...args) {
        doLog('WARN', ...args)
    },
    error(...args) {
        doLog('ERROR', ...args)
    },
}