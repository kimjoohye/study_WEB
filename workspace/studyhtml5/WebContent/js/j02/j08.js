'use strict';

let canRead = true;
let test = 3<1;

console.log(`value: ${canRead}, type : ${typeof canRead}`);
console.log(`value: ${test}, type : ${typeof test}`);

let pcwkBoolean = 0;
let pcwk01Boolean = 1;
console.log(`value: ${Boolean(pcwkBoolean)}`);
console.log(`value: ${Boolean(pcwk01Boolean)}`);

let nothing = null;
console.log(`value: ${Boolean(nothing)}`);

let x;
console.log(`value: ${x}`);
console.log(`value: ${Boolean(x)}`);

/*
value: true, type : boolean
value: false, type : boolean
value: false
value: true
value: false
value: undefined
value: false
*/