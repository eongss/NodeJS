const fs = require('fs'); // fs = 파일 시스템 모듈

fs.readFile('./ex/readme.txt', (err, data) => { // readFile(경로, 콜백)
    if (err) {
        throw err;
    }
    console.log(data); // data: buffer
    console.log(data.toString()); // decoding to string
});