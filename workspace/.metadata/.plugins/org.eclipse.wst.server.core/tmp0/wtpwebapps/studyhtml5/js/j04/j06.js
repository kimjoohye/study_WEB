'use strict';

function showMessage(message, from){
    
    // from에 값이 없으면
    if(from == undefined) {
        from = 'unknown';
    }
    
    // message : hi, from : unknown
    console.log(`message : ${message}, from : ${from}`);
    
}

showMessage('hi');