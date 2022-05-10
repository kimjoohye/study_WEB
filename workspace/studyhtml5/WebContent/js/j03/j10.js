'use strict';

let sum = 0;

for(let i=1; i<=10; i++) {
    sum += i;
    if(sum >= 30) {
        // sum 30이상 : 36, i : 8
        console.log(`sum 30이상 : ${sum}, i : ${i}`);
        break;
    }    
}