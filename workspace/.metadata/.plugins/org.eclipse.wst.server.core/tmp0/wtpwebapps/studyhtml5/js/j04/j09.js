'use strict';

var num = 11;

{
    var num = 20;
    // num : 20
    console.log(`num : ${num}`);    
}

// num : 20
console.log(`num : ${num}`);    

console.clear();

/* let, const */

let num01 = 11;
{
    let num01 = 20;
    // num01 : 20
    console.log(`num01 : ${num01}`);
}

// num01 : 11
console.log(`num01 : ${num01}`);

const num02 = 11;
{
    const num02 = 23;
    // num02 : 23
    console.log(`num02 : ${num02}`);
}
// num02 : 11
console.log(`num02 : ${num02}`);