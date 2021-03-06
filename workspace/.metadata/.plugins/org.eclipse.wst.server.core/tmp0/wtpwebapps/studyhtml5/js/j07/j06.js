'use strict';

// Date객체
// let dateObj = new Date();
let dateObj = new Date(2022,6,12,14,10,45); // 월은 당월에서 -1해야함

let dateInfo = {
    year : dateObj.getFullYear(),      // 년도 4자리
    month : dateObj.getMonth()+1,      // 월 0~11 + 1필요
    day : dateObj.getDate(),           // 일(1~31)
    week : dateObj.getDay(),           // 요일(0은 일요일 ~ 6은 토요일)
    hours : dateObj.getHours(),        // 시간
    minutes : dateObj.getMinutes(),    // 분
    seconds : dateObj.getSeconds(),    // 초
    miliseconds : dateObj.getMilliseconds() // 1000분의 1초
};

// year : 2022
// month : 5
// day : 4
// week : 3
// hours : 11
// minutes : 39
// seconds : 13
// miliseconds : 492
for(let i in dateInfo) {
    console.log(`${i} : ${dateInfo[i]}`);
}