
const jwt = require('jsonwebtoken')

//sign part of jwt 
payload = {

    userId:12,
    username:'krunal'
}

const secret = 'krunal-don'


//verification part of jwt 
const token = jwt.sign(payload , secret)
console.log(token);

jwt.verify(token, secret,(err, decoded) => {
    if(err){
   console.log('Token is invalid:', err);
    }else{
   console.log('Token is valid:', decoded);
    }
})