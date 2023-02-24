// var a= 9;
// var b=8;
// var c=a+b;
// console.log("a+b="+c)
var http = require('http')
var calc = require('./Calc.js')
var add = calc.add(2, 5)

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end("2+5 =" + add)
}
).listen(8080)

