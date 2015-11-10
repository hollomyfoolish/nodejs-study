(function(){
    var http = require('http');

    var localValue = 1;
    var foo = new Function('obj', 'return obj.v + localValue;');

    try{
        console.log(foo({v: 2}));
    }catch(e){
        console.error(e);
    }

    function foo2(_obj){
        return _obj.v + localValue;
    }

    delete anddd;
    console.log((0) + (14));

    try{
        var obj = {v: 1};
        var v = eval('obj.v + localValue;');
        console.log(v);
        console.log(foo2({v: 2}));

        var foo3 = (function(){
            var l = 2;
            return eval('(function(){return l++;});');
        })();

        console.log(foo3());
        console.log(foo3());
        console.log(foo3());

        var evaluate = function(string) {
            return eval(string);
        };
        var func = function(string) {
            return (new Function( 'return (' + string + ')' )());
        };

        var func2 = function(){
            return ((0) + (14));
        };

        console.log(evaluate('(0) + (4)'));
        console.log(func('0) + (4'));
        // console.log((0) + (4));
    }catch(e){
        console.error(e);
    }

    http.createServer(function(req, res){}).listen(18081);
})();