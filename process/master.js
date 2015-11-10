(function () {
    'use strict';
    var net = require('net'),
        cp = require('child_process'),
        os = require('os');

    var server = net.createServer();
    server.listen(18888, function(){
        var cpuNumbers = os.cpus().length;
        for(var i = 0; i < cpuNumbers; i++){
            cp.fork('worker.js').send('server', server);
        }
        console.log('server run in port: 18888');
        server.close();
    });
})();