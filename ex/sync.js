const fs = require('fs');

// readme2 여러번 읽는 프로그램(동기)

console.log('시작');
let data = fs.readFileSync('./ex/readme2.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./ex/readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./ex/readme2.txt');
console.log('3번', data.toString());
console.log('끝');

// 순서대로 출력 된다
