'use strict';

// 클래스
class Person {
    // 생성자
    constructor(name, age) {
        // 멤버변수
        this.name = name;
        this.age = age;
    }
    
    // 메서드
    speak() {
        console.log(`name : ${this.name}, age : ${this.age} speak!`);
    }
}

const pcwk = new Person('PCWK', 23);

// 멤버변수

// pcwk.name : PCWK
// pcwk.age : 23
// name : PCWK, age : 23 speak!
console.log(`pcwk.name : ${pcwk.name}`);
console.log(`pcwk.age : ${pcwk.age}`);
pcwk.speak();