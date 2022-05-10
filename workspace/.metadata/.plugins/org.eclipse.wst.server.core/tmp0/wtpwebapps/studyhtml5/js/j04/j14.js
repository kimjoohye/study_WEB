'use strict';

let str01 = '11';
// str01 : 11, type : string
console.log(`str01 : ${str01}, type : ${typeof str01}`);

// Number() : 문자형 숫자를 숫자로 변환
// str01 : 11, type : number
console.log(`str01 : ${Number(str01)}, type : ${typeof Number(str01)}`);

let str02 = '100px';
// str02 : 100px, type : string
console.log(`str02 : ${str02}, type : ${typeof str01}`);

// parseInt() : 문자를 숫자로 변환(22px -> 22)
// str02 : 100, type : number
console.log(`str02 : ${parseInt(str02)}, type : ${typeof parseInt(str02)}`);

// parseFloat()
let str03 = '33.33%';
// str03 : 33.33%, type : string
console.log(`str03 : ${str03}, type : ${typeof str03}`);

// str03 : 33.33, type : number
console.log(`str03 : ${parseFloat(str03)}, type : ${typeof parseFloat(str03)}`);