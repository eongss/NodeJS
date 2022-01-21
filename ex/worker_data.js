const {
    Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

if (isMainThread) { // 메인쓰레드 일때
    const threads = new Set(); // Set = 순서 고려x -> 중복 허용x
    threads.add(new Worker(__filename, { // Worker 객체 Set에 추가
        workerData: { start: 1}, //workerData 속성으로 원하는 데이터를 보낼 수 있음
    }));
    threads.add(new Worker(__filename, {
        workerData: { start: 2},
    }));
    for (let worker of threads) { // for of -> iterator(반복) 속성 객체만 가능
        worker.on('message', message => console.log('from worker', message)); // worker로부터 메세지 받는 on 리스너
        worker.on('exit', () => { // 워커 종료(exit)시 실행될 메서드
            threads.delete(worker); // 해당 워커 삭제
            if (threads.size === 0) {
                console.log('job done');
            }
        });
    }
} else { // 워커 일때
    const data = workerData;
    parentPort.postMessage(data.start + 100); // 부모(메인쓰레드)에게 메세지 보내기
}