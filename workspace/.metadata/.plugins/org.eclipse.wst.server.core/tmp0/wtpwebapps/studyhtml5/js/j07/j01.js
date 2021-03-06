'use strict';

let subject  = [11, 13,'html', 'javascript', 'jquery'];

// subject[0] : 11
console.log(`subject[0] : ${subject[0]}`);

// 배열 길이 : subject.length : 5
console.log(`subject.length : ${subject.length}`);

// 값 설정
subject[3] = 'JAVASCRIPT';
// subject[3] : JAVASCRIPT
console.log(`subject[3] : ${subject[3]}`);

// 배열의 값을 for문을 이용해 모두 출력

/*
subject[i] : 11
subject[i] : 13
subject[i] : html
subject[i] : JAVASCRIPT
subject[i] : jquery
*/
for(let i=0; i<subject.length;i++) {
    console.log(`subject[${i}] : ${subject[i]}`);
}

// 배열에 요소 추가 : push('jsp');
let newLength = subject.push('jsp');
console.log(`newLength : ${newLength}`);

/*
subject[0] : 11
subject[1] : 13
subject[2] : html
subject[3] : JAVASCRIPT
subject[4] : jquery
subject[5] : jsp
*/
for(let i=0; i<subject.length;i++) {
    console.log(`subject[${i}] : ${subject[i]}`);
}

// toString() : 배열을 문자열로 변환
// subject.toString() : 11,13,html,JAVASCRIPT,jquery,jsp
console.log(`subject.toString() : ${subject.toString()}`);

// join('-') : 배열의 요소를 '-'로 연결
// 11-13-html-JAVASCRIPT-jquery-jsp
console.log(`subject.join('-') : ${subject.join('-')}`);

// 배열과 배열의 결합 : concat()
let alpha01 = ['a', 'b', 'c'];
let alpha02 = ['D', 'E', 'z'];

// alpha01.concat(alpha02) : a,b,c,D,E,z
console.log(`alpha01.concat(alpha02) : ${alpha01.concat(alpha02)}`);