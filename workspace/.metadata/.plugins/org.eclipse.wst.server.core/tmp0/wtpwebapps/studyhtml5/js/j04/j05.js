'use strict';

const doAdd = (s1, s2) => s1+s2;

// (s1, s2) => s1 + s2: 24
console.log(`(s1, s2) => s1 + s2: ${doAdd(11 ,13)}`);

const doAdd02 = (s1, s2) => {
    let avg = (s1 + s2)/2; 
    return avg; 
};

// doAdd02 : 12
console.log(`doAdd02 : ${doAdd02(11,13)}`);