const fs = require('fs');

const read = fs.readFileSync('./content/read.txt', 'utf8');
console.log(read);

fs.writeFileSync('./content/write.txt', `${read} \n`, {flag: 'a'});
