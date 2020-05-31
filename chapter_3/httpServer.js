const http = require("http");

var server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(8000, console.log("server on localhost:8000"));
