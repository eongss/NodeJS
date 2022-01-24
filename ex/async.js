const fs = require('fs');

// readme2 여러번 읽는 프로그램

console.log('시작');
fs.readFile('./ex/readme2.txt', (err, data) => {
    if (err) { // err 호출시 에러 던지기
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFile('./ex/readme2.txt', (err, data) => {
    if (err) { // err 호출시 에러 던지기
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFile('./ex/readme2.txt', (err, data) => {
    if (err) { // err 호출시 에러 던지기
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('끝');