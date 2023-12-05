const path = require('path');

console.log(path.sep);

const join = path.join(__dirname, '/content', 'sub', 'test.txt');
console.log(join);

const res = path.resolve(__dirname, 'content', 'sub', 'test.txt');
console.log(res);
