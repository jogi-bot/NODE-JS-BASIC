const { log } = require('console');
const url = require('url')
const adr = 'http://localhost:8080/default.htm?year=2022&month=september'

const a  = url.parse(adr, true)

console.log(a.hostname);
console.log(a.pathname);
console.log(a.hash);
const qdata = a.query
console.log(qdata.month);


// localhost
// /default.htm
// null
// september
