'use strict';

// for...in문
let city = ['미국', '영국', '필리핀', '아이슬란드'];

/*
i: 0, city[0] : 미국
i: 1, city[1] : 영국
i: 2, city[2] : 필리핀
i: 3, city[3] : 아이슬란드
*/
for(let i in city) {
    console.log(`i: ${i}, city[${i}] : ${city[i]}`);
}

// for ... of문 : 향상된 for문


/*
i : 미국
i : 영국
i : 필리핀
i : 아이슬란드
*/
for(let i of city) {
    console.log(`i : ${i}`);
}