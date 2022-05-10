'use strict';



( function(){
    life();
}  
)();

function life() {
    console.log('즉시 실행 함수!');
}

let instant = ( function() {
    console.log('즉시 실행 함수2');
})();

/*
즉시 실행 함수!
즉시 실행 함수2
*/