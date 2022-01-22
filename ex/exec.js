const exec = require('child_process').exec;

const process = exec('dir'); // exec = 셀을 실행해서 명령어를 수행

process.stdout.on('data', function(data) {
    console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
    console.error(data.toString());
}); // 실행 에러