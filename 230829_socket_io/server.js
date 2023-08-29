const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");
const app = express();
const PORT = 8000;
// http 서버 연결하는  코드
const server = http.createServer(app);
// socket 서버 연결하는 코드
const io = SocketIO(server);

// 서버 오픈
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
