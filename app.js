// var a= 9;
// var b=8;
// var c=a+b;
// console.log("a+b="+c)
var http = require('http')

http.createServer(function(req,res){
    res.write("Welcome back to server")
    res.end()
}
).listen(8080)