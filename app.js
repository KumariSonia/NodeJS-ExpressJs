var http = require('http')
var fs = require('fs')

var fileData;
//reading file
fs.readFile('Calc.js', 'utf8', function (err, data) {
    fileData = data
})

//for creating file
fs.writeFile('Calc1.js', 'console.log("done")', function (err) {
    console.log("file saved")
})

//for appending file
fs.appendFile('Calc1.js', 'console.log("done")',function (err) {
    console.log("file appended")
})

//for deleting file
fs.unlink('Calc1.js',function(err)
{
    console.log("Deleted")
})

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(fileData)
}
).listen(8080)