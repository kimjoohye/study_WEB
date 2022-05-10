'use strict';

let char = 'java';
let brendan = "brendan";
const helloBrendan = 'Hello ' + brendan;

console.log(`char : ${char}, type : ${typeof char}`); 
console.log(`brendan : ${brendan}, type : ${typeof brendan}`); 
console.log(`helloBrendan : ${helloBrendan}, type : ${typeof helloBrendan}`); 

let str01 = '문자sms "문자"';
let str02 = "문자sms '문자'";

console.log(`str01 : ${str01}`); 
console.log(`str02 : ${str02}`); 

/*
char : java, type : string
brendan : brendan, type : string
helloBrendan : Hello brendan, type : string
str01 : 문자sms "문자"
str02 : 문자sms '문자'
*/