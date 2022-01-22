const {
    Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

// 멀티 쓰레드로 구동( *** 어렵다)

const min = 2;
let primes = [];

function findPrimes(start, range) { // 소수 구해서 primes 배열에 담는 메서드
    let isPrime = true;
    let end = start + range;
    for (let i= start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
        isPrime = true;
    }
}

if (isMainThread) {
    const max = 10000000;
    const threadCount = 8;
    const threads = new Set();
    const range = Math.ceil((max - min) / threadCount);
    let start = min;
    console.time('prime');
    for (let i = 0; i < threadCount-1; i++) {
        const wStart = start;
        threads.add(new Worker(__filename, { workerData: { start: wStart, range } }));
        start += range;
    }
    threads.add(new Worker(__filename, { workerData: { start, range: range + ((max - min + 1) % threadCount)} }));
    for (let worker of threads) {
        worker.on('error', (err) => {
            throw err;
        });
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.timeEnd('prime');
                console.log(primes.length);
            } 
        });
        worker.on('message', (msg) => {
            primes = primes.concat(msg);
        });
    }

} else { // worker 일 때
    findPrimes(workerData.start, workerData.range); // workerData {start, range}
    parentPort.postMessage(primes); // 부모에게 메세지 보냄
}