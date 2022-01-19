const os = require('os');

console.log('운영체제 정보-------------------');
console.log('os.arch():', os.arch());
console.log('os.platform():', os.platform());
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime());
console.log('os.hostname():', os.hostname());
console.log('os.release():', os.release());

console.log('경로 정보-----------------------');
console.log('os.homedir():', os.homedir());
console.log('os.tmpdir():', os.tmpdir());

console.log('cpu 정보------------------------');
console.log('os.cpus():', os.cpus()); // 컴퓨터 코어 정보
console.log('os.cpus().lenth:', os.cpus().length); // 코어 개수 확인하기

console.log('메모리 정보---------------------');
console.log('os.freemem():', os.freemem());
console.log('os.totalmem():', os.totalmem());