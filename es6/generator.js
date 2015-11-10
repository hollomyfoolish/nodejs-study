'use strict';
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next().value);
console.log(hw.next());
console.log(hw.next());

let ii = 1;
var foo = (function(){
    let i = 0;
    return function(){
        i++;
        return i + ii;
    };
}());


console.log(foo());
ii++;
console.log(foo());
console.log(foo());