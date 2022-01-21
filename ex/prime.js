const min = 2;
const max = 10000000;
const primes = [];

function generatePrimes(start, range) {
    let isPrime = true;
    const end = start + range;
    for (let i = start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) { // Math.sqrt = 제곱근
            if (i !== j && i % j === 0) { // i, j가 같은 홀수일 경우도 0으로 나누어 떨어짐 그래서 i !== j
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

console.time('prime');
generatePrimes(min, max);
console.timeEnd('prime');
console.log(primes.length);