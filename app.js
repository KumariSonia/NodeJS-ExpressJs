// var a= 9;
// var b=8;
// var c=a+b;
// console.log("a+b="+c)
var http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end("Welcome back to server")
}
).listen(8080)