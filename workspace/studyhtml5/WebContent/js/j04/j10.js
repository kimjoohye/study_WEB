'use strict';

function factorial(n) {
    
   // 종료 조건
   if(n === 0) {
     console.log('호출 끝!'); 
   }else {
     console.log(`n = ${n}`);
     factorial(n-1)*n;
    }
}

console.log(factorial(4));

/* 
n = 4
n = 3
n = 2
n = 1
호출 끝!
*/