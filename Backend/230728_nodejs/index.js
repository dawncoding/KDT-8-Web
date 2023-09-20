// 관례상 모듈 이름과 동일한 변수 이름으로 설정
const express = require("express");
// import express from "express";

const app = express();
// 관례상 상수가 들어가는 변수는 대문자로 구성
const PORT = 8000;

// 뷰 엔진
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적인 파일 불러오기
// app.use("public", express.static("./public"));

// localhost:8000"/..." 도메인 작성
// ex) app.get("/app", (req, res)=>...) -> "localhost:8000/app"
// 콜백함수 만들 때 항상 (요청, 응답) 설정해야 한다.
app.get("/", (req, res) => {
  // send(): 클라이언트에 응답 데이터를 보낼 때
  // res.send("Hello express");
  // 객체를 사용한다면,
  //   res.send({
  //     result: true,
  //     code: 1000,
  //     message: "회원가입에 성공하였습니다.",
  //     data: { name: "dawn" },
  //   });

  // render("뷰 엔진 파일 이름", 데이터): 뷰 엔진 렌더링
  res.render("test", { data: "dawn" });
});

// listen(): 서버 열어준다.
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

console.log(express);
