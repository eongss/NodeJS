const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => { // 64바이트 길이 문자열로 만듦
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => { // sha512형식으로 변환을 10만번 반복, 64바이트 
        console.log('password:', key.toString('base64'));
    });
});0