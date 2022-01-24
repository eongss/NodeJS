const fs = require('fs').promises; // promise 기반의 fs 모듈

fs.readFile('./ex/readme.txt')
    .then((data) => { // resolve 일때 then 실행
        console.log(data);
        console.log(data.toString());
    })
    .catch((err) => { // reject 일때 catch 실행
        console.error(err);
    });