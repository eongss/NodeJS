const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./ex/readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./ex/readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream); // readStream과 writeStream 중간에 zlibStream으로 파이핑한것