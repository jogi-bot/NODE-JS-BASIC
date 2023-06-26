const express = require("express");
const app = express();
const port = 3000

app.get('/',(req, res)=>{
    res.send('hii krunal');
})

app.listen(port,()=>{
console.log(`you are in port ${port}`);
})
