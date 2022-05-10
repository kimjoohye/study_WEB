'use strict';

function multiply(n) {
    
    return function() {
        return n*=n; //n=n*n;
    }
}

let num01 = multiply(10);

// num01 : 100
console.log(`num01 : ${num01()}`);

// num01 : 10000
console.log(`num01 : ${num01()}`);

let num02 = multiply(3);

// num02 : 9
console.log(`num02 : ${num02()}`);

// num02 : 81
console.log(`num02 : ${num02()}`);