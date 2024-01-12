var generator = require('generate-password');



var http = require('http');
http.createServer(function (req, res){
    var password = generator.generate({
        length: 10,
        numbers: true
    });
    res.write("<h1>password</h1><hr>");
    res.end();
}).listen(8080);