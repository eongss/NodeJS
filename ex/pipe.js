const fs = require('fs');

const readStream = fs.createReadStream('./ex/readme4.txt');
const writeStream = fs.createWriteStream('./ex/writeme3.txt');
readStream.pipe(writeStream); // pipe 메서드로 readStream과 writeStream을 연결(파이핑)