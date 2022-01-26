const fs = require('fs');

// createReadStream 조금씩 나눠서 전달(스트림 개념)

const readStream = fs.createReadStream('./ex/readme3.txt', { highWaterMark: 16 }); // readStream 생성, highWaterMark = 버퍼의 크기 정하기(여기서는 16B)
const data = [];

readStream.on('data', (chunk) => { // readStream.on(이벤트 이름, 이벤트 리스너)
    data.push(chunk); // data 배열에 chunk(스트링 버퍼) 넣기
    console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end :', Buffer.concat(data).toString()); // data 버퍼를 결합(concat)해서 새로운 버퍼 생성 후 스트링으로 바꾸기
});

readStream.on('error', (err) => {
    console.log('error: ', err);
});