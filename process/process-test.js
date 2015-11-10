(function(){
    var http = require('http');

    function sendReq(){
        http.request({
            hostname: 'localhost',
            port: 18888,
            path: '/',
            method: 'GET'
        }, function(res){
            res.on('data', function(chunk){
                console.log(chunk + '\n');
            });
        }).end();
    }

    setInterval(sendReq, 10);
})();