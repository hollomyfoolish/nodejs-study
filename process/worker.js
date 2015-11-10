(function(){
    var http = require('http');
    
    var worker = http.createServer(function(req, res){
        res.writeHeader(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('Welcome, I am worker: ' + process.pid);
    });

    process.on('message', function(msg, server){
        server.on('connection', function(socket){
            worker.emit('connection', socket);
        });
    });
})();