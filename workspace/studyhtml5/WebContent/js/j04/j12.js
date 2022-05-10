'use strict';

let str01 = 'pcwk_자바스크립트';

// str01 : pcwk_자바스크립트
console.log(`str01 : ${str01}`);

// encodeURIComponent()
let encodeStr = encodeURIComponent(str01);

// encodeStr : pcwk_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8
console.log(`encodeStr : ${encodeStr}`);

// decodeURIComponent
let decodeStr = decodeURIComponent(encodeStr);

// decodeStr : pcwk_자바스크립트
console.log(`decodeStr : ${decodeStr}`);