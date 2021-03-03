'use strict';

var a = 10;
// c = 30; => con use strict non posso usare una var che non ho prima dichiarato

console.log('finito');

function f() {
    var b = 10;
    var a = 20;
    // d = 40; => non posso in strict mode
    if (b > 5) {
        var k = 50;
        console.log(k);

        let j = 60;
        console.log(j); 
    }
    console.log(k);
    // console.log(j);

    console.log(b);
    // console.log(this.a);
    console.log(window.a);

    console.log(a);
    // console.log(c);
    // console.log(d);
}

f();
// console.log(b);
// console.log(c);
// console.log(d);