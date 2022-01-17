const { odd, even } = require('./var'); // 변수
const checkNumber = require('./func'); // 함수

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));