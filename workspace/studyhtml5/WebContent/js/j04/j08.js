'use strict';

let kor = 90;

function getScore() {
    kor = 100;
    console.log(`kor : ${kor}`);
}

getScore();

console.log(`kor : ${kor}`); // 전역변수

console.clear(); // console 로그 지우기

let eng = 90;

function getEngScore() {
    let eng = 100; //  지역변수
    console.log(`eng : ${eng}`);
}

getEngScore();
console.log(`eng : ${eng}`);

/*
Console was cleared
eng : 100
eng : 90
*/