const { odd, even } = require('./var'); // require함수로 var.js에 있던 값을 불러온 후 odd, even 변수에 할당

function checkOddOrEven(num) {
    if (num % 2) {
        return odd;
    }
    return even;
}

// module.exports에 함수 대입
module.exports = checkOddOrEven; // 다른 모듈(var.js)을 사용하는 파일을 다시 모듈(func.js)로 만듦
