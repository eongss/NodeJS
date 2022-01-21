const {
    Worker, isMainThread, parentPort,
} = require('worker_threads'); // 구조 분해 할당

// console.log('현재 파일 이름:', __filename);

if (isMainThread) { // isMainThread = 메인 쓰레드에서 실행되는지 아닌지 확인
    const worker = new Worker(__filename); // new Worker를 통해 현재파일(__filename)을 워커 쓰레드에서 실행
    worker.on('message', message => console.log('from worker', message)); // worker.on('message')를 사용해서 워커로 부터 메세지를 받음
    worker.on('exit', () => console.log('worker exit')); // 종료시 worker.on('exit') 실행됨
    worker.postMessage('ping'); // 워커에 메세지 보내기
} else { // 워커일 때
    parentPort.on('message', (value) => { // parentPort.on 리스너를 통해 메세지를 받음
        console.log('from parent', value);
        parentPort.postMessage('pong'); // 부모(메인)에게 메세지 보내기
        parentPort.close(); // 워커에서 on 메서드 사용시 직접 닫아야함
    });
}