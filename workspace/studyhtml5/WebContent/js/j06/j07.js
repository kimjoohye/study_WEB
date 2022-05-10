'use strict';

class Shape {
    constructor(width, height, color) {
        this.width = width; // 넓이
        this.height = height; // 높이
        this.color = color; // 색상
    }
    
    draw() {
        console.log(`drawing : ${this.color} color!`);
    }
    
    getArea() {
        return this.width * this.height;
    }
    
}

// 사각형
class Rectangle extends Shape {
    
    
}

// 사각형 class
const rectangle = new Rectangle(10, 10, 'Red');

// drawing : Red color!
rectangle.draw();

// rectangle.getArea() : 100
console.log(`rectangle.getArea() : ${rectangle.getArea()}`);

// 삼각형
class Triangle extends Shape {
    draw() {
        // parent(Shape)에 메서드 호출
        super.draw();
        console.log(`Triangle drawing Blue color!`);
    }
    
    // getArea() 재정의
    getArea() {
        // 삼각형 넓이 구하기!
        return (this.width * this.height) / 2;
    }
    
    toString() {
        return `Triangle : color : ${this.color}`;
    }
}
console.clear();

const triangle = new Triangle(10, 10, 'yellow');

// drawing : yellow color!
// Triangle drawing Blue color!
triangle.draw();

// triangle.getArea() : 50
console.log(`triangle.getArea() : ${triangle.getArea()}`);

// triangle.toString() : Triangle : color : yellow
console.log(`triangle.toString() : ${triangle.toString()}`);

// instanceof
// triangle instanceof shape : true
console.log(`triangle instanceof shape : ${triangle instanceof Shape}`);

// 사각형, 삼각형
// triangle instanceof rectangle : false
console.log(`triangle instanceof rectangle : ${triangle instanceof Rectangle}`);