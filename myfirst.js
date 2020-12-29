var http = require('http');
var url = require('url');
var fs = require('fs');
var events = require('events');

http.createServer(function(req, res) {
    fs.readFile('demofile1.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();

    });
    
}).listen(8080);
