const buffer = Buffer.from('저를 버퍼로 바꿔보세요'); // String을 버퍼로 만드는 메서드
console.log('from():', buffer);
console.log('length:', buffer.length); // 버퍼 길이
console.log('toString():', buffer.toString()); // 버퍼를 String으로 만들기

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
// console.log(buffer2);
console.log('concat(): ', buffer2.toString());

const buffer3 = Buffer.alloc(8, 'hogu');
console.log(buffer3);
console.log('alloc(): ', buffer3.toString());

