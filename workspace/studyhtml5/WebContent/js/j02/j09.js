'use strict';

let text = 'S_PCWK';
console.log(`text: ${text}, type : ${typeof text}`);

text = 11;
console.log(`text: ${text}, type : ${typeof text}`);

text = '1'/5;
console.log(`text: ${text}, type : ${typeof text}`);

text = '1'+5;
// text: 15, type : string
console.log(`text: ${text}, type : ${typeof text}`);

/*
text: S_PCWK, type : string
text: 11, type : number
text: 0.2, type : number
text: 15, type : string
*/