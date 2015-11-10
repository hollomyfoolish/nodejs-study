var fs = require('fs'),
    path = require('path');


var l1 = 'l1',
    l2 = 'l2';


var exec = function(s){
    var wrapper = ['(function(__l1, __l2){', s, '})(l1, l2);'];
    eval(wrapper.join(''));
};

var globalExec = function(s){
    return eval.call(global, s);
};

fs.readFile(path.join(__dirname, './slaver.js'), {encoding: 'utf8'}, function(err, data){
    if(err){
        console.error(err);
        return;
    }
    global.__l1 = 'global l1';
    global.__l2 = 'global l2';
    globalExec(data);
    console.log(innerL);
    console.log(_innerL);
});