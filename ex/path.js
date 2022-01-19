const path = require('path'); // path 내장 모듈 사용

const string = __filename;

console.log('path.sep', path.sep);
console.log('path.sep', path.delimiter);
console.log('-----------------------');
console.log('path.dirname()', path.dirname(string));
console.log('path.dirname()', path.extname(string));
console.log('path.basename()', path.basename(string));
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('-----------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
    dir: 'C:\\users\\zerocho',
    name: 'path',
    ext: '.js',
}));
console.log('path.normalize():', path.normalize('C://users\\\\zerocho\\path.js'));
console.log('-----------------------');
console.log('path.isAbsolute(C:\\)', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home)', path.isAbsolute('./home'));
console.log('-----------------------');
console.log('path.relative():', path.relative('C:\\users\\zerocho\\path.js', 'C:\\'));
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));
console.log(__dirname);
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/zerocho'));
