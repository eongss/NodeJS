const fs = require('fs').promises;

fs.writeFile('./ex/writeme.txt', '글이 입력됩니다') // 파일 생성 메서드
    .then(() => {
        return fs.readFile('./ex/writeme.txt'); // 생성 성공시 readFile() 실행하고 결과 값인 promise 객체 리턴
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });