const fs = require('fs');

const stream = fs.createReadStream('./content/bigFile.txt', { encoding: 'utf8' });

stream.on('data', result => {
  console.log(result);
});

//

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // const data = fs.readFileSync('./content/bigFile.txt', 'utf8');
  // res.end(data);
  const res1 = fs.createReadStream('./content/bigFile.txt', { encoding: 'utf8' });
  // res1.on('data', re => {
  //   res.end(re);
  // });

  res1.on('open', () => {
    console.log(res);
    res1.pipe(res);
  });
});

server.listen(5000);
