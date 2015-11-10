var sin = process.stdin;
sin.setEncoding('utf8');
sin.on('readable', function(){
    var chunk = sin.read();
    if(chunk !== null){
        console.log(chunk);
    }
});
sin.on('end', function(){
    console.log('end');
});