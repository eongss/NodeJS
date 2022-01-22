const spawn = require('child_process').spawn;

const process = spawn('python', ['ex/test.py']); // spawn = 새로운 프로세스를 띄우면서 명령어를 실행

process.stdout.on('data', function(data) {
    console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
    console.error(data.toString());
}); // 실행 에러
