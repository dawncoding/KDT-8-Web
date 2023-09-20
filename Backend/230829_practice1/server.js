const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");
const app = express();
const PORT = 8000;
// http 서버 연결하는 코드
const server = http.createServer(app);
// socket 서버 연결하는 코드
const io = SocketIO(server);

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("client");
});

io.on("connection", (socket) => {
  // socket.on()에는 callback 함수가 항상 있어야 한다.
  socket.on("hello", (data) => {
    console.log(`${data.name}: ${data.message}`);
    socket.emit("cbHello", { name: "server", message: "안녕하세요!" });
  });

  socket.on("study", (data) => {
    console.log(`${data.name}: ${data.message}`);
    socket.emit("cbStudy", { name: "server", message: "공부하세요!" });
  });

  socket.on("bye", (data) => {
    console.log(`${data.name}: ${data.message}`);
    socket.emit("cbBye", { name: "server", message: "안녕히 가세요!" });
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
