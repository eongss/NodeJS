setImmediate(() => {
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeout');
}, 0);

Promise.resolve().then(() => console.log('promise'));

// nextTick > promise > timeout(0) > immediate
// nextTick의 콜백함수는 최우선, 그다음 promise 이것들을 '마이크로 태스크' 라고 함 