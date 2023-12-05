const fs = require('fs');
const fsPromises = require('fs').promises;
const util = require('util');

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

// const getData = path => {
//   return new Promise((res, rej) => {
//     fs.readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         rej(err);
//       } else {
//         res(data);
//       }
//     });
//   });
// };

// getData('./content/read.txt')
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const start = async () => {
//   const firstFile = await getData('./content/read.txt');
//   const secondFile = await getData('./content/read_async.txt');
//   console.log(firstFile);
//   console.log(secondFile);
// };

// start();

// another way using util promisfy

// const start = async () => {
//   const firstFile = await readFilePromise('./content/read.txt', 'utf8');
//   const secondFile = await readFilePromise('./content/read_async.txt', 'utf8');
//   await writeFilePromise('./content/akbar.txt', `${firstFile},${secondFile}`);
// };

// start();

// using fs.promises

const doSomething = async () => {
  try {
    const firstFile = await fsPromises.readFile('./content/read.txt', 'utf8');
    const secondFile = await fsPromises.readFile('./content/read_async.txt', 'utf8');
    await fsPromises.writeFile('./content/fs.txt', `${firstFile} , ${secondFile} \n`, { flag: 'a' });
  } catch (error) {
    return error;
  }
};

doSomething();
