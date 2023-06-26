const { write } = require('fs')
const http = require('http')

const { text } = require('stream/consumers')

require('dotenv').config()  
const server = http.createServer((req, res)=>{

    res.writeHead(200,{'Content-Type': 'text/plain'})
    res.end('hii krunal')
})
const Server =  process.env.SERVER_PORT
server.listen(Server, ()=>{
    console.log('you are in 8080 post');
})