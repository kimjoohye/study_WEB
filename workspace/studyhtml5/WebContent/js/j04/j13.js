'use strict';

let num01 = '100F';

// 숫자가 아니면 : true
if(isNaN(num01) == true) {
    console.log(`숫자가 아니면 : ${isNaN(num01)}`);
}else {
    console.log(`숫자면 : ${isNaN(num01)}`);    
}

let num02 = 1/0;

// 무한이면 : false
if(isFinite(num02) == true) {
    console.log(`유한이면 : ${isFinite(num02)}`);
}else {
    console.log(`무한이면 : ${isFinite(num02)}`);    
}