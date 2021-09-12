const express = require('express')
const http = require('http');
const app = express()
const port = 3000
const { Server } = require("socket.io");
var server = http.createServer(app);
const io = new Server(server);



io.on('connection', (socket) => {
    console.log('a user connected');
    io.send('ola')
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
