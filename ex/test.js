// const timeout = setTimeout(() => {
//     console.log('1.5초 후 실행');
// }, 1500);

const immediate = setImmediate(() => { // setImmediate() 함수는 따로 실행 하지 않아도 실행이 되는 듯함?이 아니라 
                                       // 타이머 함수 자체가 선언해 놓으면 자동으로 실행되는듯
    console.log('즉시 실행');
});
const p = () => 1;
console.log(p());