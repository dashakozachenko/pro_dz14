"use strict";

const num = +prompt("Введите число.");
let isPrime = true;
if (num === 1) {
    isPrime = false;
}

for (let i = 2; i < num; i++)
    if (num % i === 0) {
        isPrime = false;
        break;
    }

console.log(isPrime);



