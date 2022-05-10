/**
 * 1. 하나의 실행문 끝나면 마지막에 (;)을 붙여준다.
 */

var num = 5;
document.write(num+"<br/>");

console.log('num='+num);

// 2. 대소문자를 구분한다.
// writeln : write와 동일한 기능을 하며 단 <pre>태그내에서 사용될 경우 자동줄바꿈을 해줌
document.writeln('num='+num);

// 오류 - 수행되지 않는다.
//document.writeln('num='+NUM);

// 3. 주석
// 한줄 주석
/* 여러 줄 주석 */