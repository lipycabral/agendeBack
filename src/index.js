const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app  = express()
const port = process.env.PORT || 3000

const server = require('http').Server(app)
const io = require('socket.io')(server)
const socket = SocketIO(server)

mongoose.connect('mongodb://sandro:280498fe@ds145395.mlab.com:45395/dbappai',{
    useNewUrlParser: true
})

app.use((req, res, next) => {
    req.socket = socket
    return next()
})
app.use(cors())

app.use(express.json())
app.use(require('./routes'))

server.listen(port, ()=>{
    console.log('server started')
})