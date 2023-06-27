const express = require('express')
const router = express.Router()


router.get('/',(req, res)=>{
    res.send('hii 1')
    
})
router.post('/f',(req, res)=>{
    res.send('hii 2')

})

module.exports = router

