const { emit } = require('nodemon')
const wapService = require('../api/wap/wap.service')

let gIo = null

const connectSockets = (http, session) => {
    gIo = require('socket.io')(http, {
        cors: { origin: '*' }
    })
    gIo.on('connection', socket => {
        // console.log('New socket', socket.id)
        socket.on('disconnect', socket => {
            // console.log('Someone disconnected')
        })

        socket.on('wap room', wapId => {
            // console.log('Join to room:', wapId);
            if (socket.wapId === wapId) return
            if (socket.wapId) socket.leave(socket.wapId)
            socket.join(wapId)
            socket.wapId = wapId
        })

        socket.on('wap new change', action => {
            socket.to(socket.wapId).emit('wap add change', action)
        })

        socket.on('owner room', ownerId => {
            // console.log('Join to room:', wapId);
            if (socket.ownerId === ownerId) return
            if (socket.ownerId) socket.leave(socket.ownerId)
            socket.join(ownerId)
            socket.ownerId = ownerId
        })

        socket.on('new lead', async ({ wapId, lead }) => {
            await wapService.addLead(wapId, lead)
            socket.to(socket.ownerId).emit('refresh leads')
        })
    })
}

module.exports = {
    connectSockets
}