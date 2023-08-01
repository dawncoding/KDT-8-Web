// express 인스턴스 생성 및 app에 저장
const express = require("express");
const app = express();

// 8000번 포트로 지정
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// view engine
// 화면 엔진은 ejs로 설정한다.
app.set("view engine", "ejs");
app.set("views", "./views");

// router
app.get("/", (req, res) => {
  // res.send("Hello");
  res.render("index", { title: "폼 실습" });
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("result", {
    title: "GET요청 폼 결과 확인하기",
    // userInfo: {id: ''m pw: ''}
    userInfo: req.query,
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result", {
    title: "POST요청 폼 결과 확인하기",
    // userInfo: {id: ''m pw: ''}
    userInfo: req.body,
  });
});

app.put("/", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
