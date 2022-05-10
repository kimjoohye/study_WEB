'use strict';

//  객체 리터럴

let circle = {
    color : 'yellow',
    diameter : 100,
    radius: function() {
        return this.diameter/2;
    }    
};

console.log(`circle.color : ${circle.color}`); // circle.color : yellow
console.log(`circle.diameter : ${circle.diameter}`); // circle.diameter : 100
console.log(`circle.radius() : ${circle.radius()}`); // circle.radius() : 50

// 객체 생성자 함수
function Triangle(b,h) {
    this.base = b;
    this.height = h;
    this.area = function() {
        return this.base * this.height / 2;
    };
}

let triangle01 = new Triangle(10,10);
let triangle02 = new Triangle(20,10);

// triangle01.base : 10
// triangle01.height : 10
// triangle01.area() : 50
console.log(`triangle01.base : ${triangle01.base}`);
console.log(`triangle01.height : ${triangle01.height}`);
console.log(`triangle01.area() : ${triangle01.area()}`);

// triangle02.base : 20
// triangle02.height : 10
// triangle02.area() : 100
console.log(`triangle02.base : ${triangle02.base}`);
console.log(`triangle02.height : ${triangle02.height}`);
console.log(`triangle02.area() : ${triangle02.area()}`);