const express = require('express')
const cors = require('cors')
const path = require('path')
const expressSession = require('express-session')

const app = express()
const http = require('http').createServer(app)

// Express App Config
const session = expressSession({
    secret: 'i love to build with wixer',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})

app.use(express.json())
app.use(session)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

// Routes
const setupAsyncLocalStorage = require('./middlewares/setupAls.middleware')
app.all('*', setupAsyncLocalStorage)

const authRoutes = require('./api/auth/auth.routes')
const wapRoutes = require('./api/wap/wap.routes')
app.use('/api/auth', authRoutes)
app.use('/api/wap', wapRoutes)

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const { connectSockets } = require('./services/socket.service')
connectSockets(http, session)

const logger = require('./services/logger.service')
const port = process.env.PORT || 3030
http.listen(port, () => {
    logger.info(`server.js - Server is running on port: ${port}`)
})