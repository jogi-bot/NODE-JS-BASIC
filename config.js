const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', function(req, res){
    res.send('hello world')
})
const Server =   process.env.SERVER_PORT

app.listen(Server,() =>{
    console.log(`you are in ${Server} port`);

})