/**
 * let
   ECMAScript 2015(ES6)
 */
 let num = 11;
 let num = 14;
 
 // Uncaught SyntaxError: Identifier 'num' has already been declared
 console.log(num);
 
 //변수, 함수 호이스팅
 //함수 내에서 아래에 존재하는 변수가 끌어올려지는 것
 //자바스크립트 parser 내부적으로 끌어 올려서 처리된다.
 
 //error
 console.log(text); // 선언 + 초기화 안된 상태, undefined 
 text = 'Hoisting'; // 선언 + 초기화 + 할당된 상태
 var text;