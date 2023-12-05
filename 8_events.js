// const EventEmitter = require("events");
//
// const customEmitter = new EventEmitter();
//
// customEmitter.on("response", (...args) => {
//   console.log(`event received`, args);
// });
//
// customEmitter.on("response", () => {
//   console.log(`another event`);
// });
//
// customEmitter.emit("response", "akbar", 30);

// events with http module

const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(5000);
