const express = require('express')

var app = express();
app.get('/', function (req, res) {
    res.send('Welcome!');
});

app.get('/user', function (req, res) {
    //getting id using query string ex:- url?id=2
    const id = req.query.id
    res.send('Welcome user ' + id + "!");
});

app.get('/user/:id', function (req, res) {
    //getting id using param string ex:- url/id=2
    const id = req.params.id
    res.send('Welcome user ' + id + "!");
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});  