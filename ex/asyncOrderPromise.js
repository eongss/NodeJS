const fs = require('fs').promises;

// // readme2 여러번 읽는 프로그램(비동기인데 순서대로 실행하기 -> 콜백 지옥 -> promise화 해서 해결)

console.log('시작');
fs.readFile('./ex/readme2.txt')
    .then((data) => {
        console.log('1번', data.toString());
        return fs.readFile('./ex/readme2.txt');
    })
    .then((data) => {
        console.log('2번', data.toString());
        return fs.readFile('./ex/readme2.txt');
    })
    .then((data) => {
        console.log('3번', data.toString());
        console.log('끝'); // 리턴 안해도 됨
    })
    .catch((err) => {
        console.error(err);
    });