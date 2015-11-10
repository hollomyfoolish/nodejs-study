var reStartTimes = 5;
process.on('exit', function(code){
    console.log('process exit: %s', code);
});

process.on('beforeExit', function(code){
    console.log('before exit: %s', code);
    reStartTimes--;
    if(reStartTimes > 0){
        setTimeout(function(){
            console.log('process back in 1 second');
        }, 1000);
    }
});

setTimeout(function(){
    console.log('process will exit in 2 seconds');
}, 2000);

process.on('uncaughtException', function(err){
    console.log('uncaught exception happend: %s', err.toString());
});

console.log(abc);
