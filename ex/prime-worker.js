const {
    Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

const min = 2;
let primes = [];

function findPrimes(start, range) {
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
}