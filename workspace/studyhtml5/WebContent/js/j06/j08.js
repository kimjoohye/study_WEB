'use strict';


// Number 객체 생성
let num01 = new Number(10);
let num02 = 12;

// num01+num02=22
console.log(`num01+num02=${num01+num02}`);

let num = 328.575;

// toFixed()
// num.toFixed(1) : 328.6
console.log(`num.toFixed(1) : ${num.toFixed(1)}`); // num.toFixed(1) : 328.6
console.log(`num.toFixed(2) : ${num.toFixed(2)}`); // num.toFixed(2) : 328.57
console.log(`num.toFixed() : ${num.toFixed()}`); // num.toFixed() : 329

num = 12;

// toString()
// num.toString(2) : 1100
console.log(`num.toString(2) : ${num.toString(2)}`); // num.toString(2) : 1100
console.clear();

// 소수점 계산 : 32,200(예상), 실제값(32199.999999999996)
 console.log(`46000*0.7 : ${46000*0.7}`);
 
// 46000*(0.7*10)/10
// 46000*(0.7*10)/10 : 32200
console.log(`46000*(0.7*10)/10 : ${46000*(0.7*10)/10}`);