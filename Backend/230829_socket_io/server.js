const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");
const app = express();
const PORT = 8000;
// http 서버 연결하는  코드
const server = http.createServer(app);
// socket 서버 연결하는 코드
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});
app.get("/chat", (req, res) => {
  res.render("chat");
});

/////////////////////// socket
io.on("connection", (socket) => {
  // socket: 객체 형태 -> 원하는 값을 추가로 넣을 수 있다.
  // console.log(socket);

  // socket.on("new_message", (arg, cb) => {
  //   console.log(arg);
  //   cb(arg);
  // });

  console.log("join 전", socket.rooms);
  // 실습 2: 채팅zx
  socket.on("join", ({ chatroom, userInfo }) => {
    // ?
    socket.room = chatroom;
    socket.userInfo = userInfo;
    socket.join(chatroom);
    console.log("join 후", socket.rooms);
    // broadcast 포함 시, 나를 제외한 전체 사용자에게 메시지를 전달한다.
    socket.broadcast.to(chatroom).emit("userjoin", "환영합니다.");
  });
  socket.on("message", ({ sender, message }) => {
    // io.to("특정 방 이름").emit(이벤트): 특정 방에 있는 전체 사용자에게 메시지를 전달한다.
    io.to(socket.room).emit("chat", `${message}`);
  });
});

// 서버 오픈
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
