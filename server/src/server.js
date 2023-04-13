const http = require("http");

const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Express way of creating server

// const express = require("express");
// const PORT = process.env.PORT || 8000;

// const app = express();

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
