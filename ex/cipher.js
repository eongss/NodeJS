const crypto = require('crypto');

const algorithm = 'aes-256-cbc'; // 알고리즘 종류임
const key = 'abcdefghijklmnopqrstuvwxyz123456'; // 32바이트 여야함
const iv = '1234567890123456'; // 16바이트 여야함, iv = 초기화벡터 = 첫 블록을 암호화할때 사용되는 값

const cipher = crypto.createCipheriv(algorithm, key, iv); // 암호화
let result = cipher.update('암호화할 문장', 'utf8', 'base64'); // 암호화할 대상, 인코딩, 암호
result += cipher.final('base64'); // 결과물의 인코딩을 넣고 암호화 완료
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv); // 복호화
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8'); // 복호화 결과물의 인코딩을 넣고 완료  
console.log('복호화:', result2);