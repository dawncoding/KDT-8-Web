const http = require("http");
const ws = require("ws");
const express = require("express");
const PORT = 8000;
const app = express();
// http 서버와 웹 소켓 서버 접속하는 코드를 분리하는 것이 좋다?
// http 서버 접속
const server = http.createServer(app);
// 웹 소켓 서버 접속
const wss = new ws.Server({ server });

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

// 브라우저(클라이언트)들을 담을 변수 선언
const sockets = [];
// 변수 socket: 접속한 브라우저
wss.on("connection", (socket) => {
  console.log("클라이언트가 연결되었습니다.");
  // sockets 배열에 브라우저 추가
  sockets.push(socket);

  socket.on("message", (message) => {
    // 웹 소켓을 통해 클라이언트와 서버 간의 데이터를 주고 받을 때, 일반적으로 문자열 또는 버퍼 형태로 전달된다.
    // 버퍼를 쓰는 이유: 서버가 모두 다른 환경이기 때문에 객체를 전달할 때, 객체를 일련의 바이트로 변환하는 직렬화 과정이 필요하다.
    console.log(message);
    // string 형태로 받은 데이터를 서버에서 객체로 처리하기 위해 -> JSON.parse()
    // msg: {user: "...", message: "..."}
    const msg = JSON.parse(message);
    console.log(`클라이언트로부터 받은 메시지: ${msg.message}`);

    // 클라이언트로 응답 메시지 전송
    // socket.send(`서버 메시지: ${message}`);
    wss.clients.forEach((elem) => {
      // 선언한 변수 sockets 대신에 wss.clients 사용
      elem.send(`${msg.user}: ${msg.message}`);
    });
  });
  // 오류
  socket.on("error", (err) => {
    console.log("에러가 발생했습니다.", err);
  });
  // 접속 종료
  socket.on("close", () => {
    console.log("클라이언트와 연결이 종료되었습니다.");
  });
});

// 관례상, 서버 시작하는 코드는 맨 밑에 두는 것으로 추천
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
