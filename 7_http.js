const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('home page');
    }

    if (req.url === '/about') {
        return res.end('about page');
    }

    res.end(`
    <h1>Oops</h1>
    <p>back to <a href='/' >home</a> </p>
  `);
});

server.listen(8080, () => {
    console.log('Listening on port 8080');
});
