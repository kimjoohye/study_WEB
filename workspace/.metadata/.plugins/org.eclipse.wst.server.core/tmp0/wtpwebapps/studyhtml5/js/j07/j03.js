'use strict';

// forEach()
let numArray = [10,20,30,40,50,60,70];
let sum = 0;

numArray.forEach(function(value,index,array){
    /*
    value : 10
    value : 20
    value : 30
    value : 40
    value : 50
    value : 60
    value : 70
    */
    console.log(`value : ${value}`);
    // console.log(`index : ${index}`);
    // console.log(`index : ${index}, ${array}`);
    sum+=value;
});
console.log(`sum=${sum}`); // sum=280

/*
    map()
       기존 배열을 이용해 새로운 배열을 생성  
*/

console.clear();

let base = [1,2,3];

let newArray = base.map(function(value, index, array){
    console.log(`value : ${value}, index : ${index}, array : ${array}`);
    return value*2;
});

console.log(`newArray.toString() : ${newArray.toString()}`);
/*
value : 1, index : 0, array : 1,2,3
value : 2, index : 1, array : 1,2,3
value : 3, index : 2, array : 1,2,3
newArray.toString() : 2,4,6
*/

/*
    filter()
       조건에 맞는 배열의 요소들만 걸러 새로운 배열 생성
*/
let data = ['JAVASCRIPT', 20, 30, 'JQUERY'];

let numArray02 = data.filter(function(value, index, array){
    console.log(`type : ${typeof value}, value : ${value}, index : ${index}, array : ${array}`);
    return typeof value === 'string';
});


console.log(`numArray02.toString() : ${numArray02.toString()}`);

/*
type : string, value : JAVASCRIPT, index : 0, array : JAVASCRIPT,20,30,JQUERY
type : number, value : 20, index : 1, array : JAVASCRIPT,20,30,JQUERY
type : number, value : 30, index : 2, array : JAVASCRIPT,20,30,JQUERY
type : string, value : JQUERY, index : 3, array : JAVASCRIPT,20,30,JQUERY
numArray02.toString() : JAVASCRIPT,JQUERY
*/
