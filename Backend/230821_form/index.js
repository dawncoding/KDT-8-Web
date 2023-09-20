const express = require("express");
const app = express();
const PORT = 8000;

// view engine
app.set("view engine", "ejs");
// views(node.js의 옵션)라는 설정을 다른 폴더로 바꿀 때 쓰는 옵션
// views라는 폴더를 기본으로 사용할 때는 입력하지 않아도 된다.
app.set("views", "./views");

// body-parser
// POST 전송일 때 사용
// req.body
// extended: 중첩된 객체 표현을 허용할지 말지를 정할 때 사용
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// application/json
app.use(express.json());

// get 방식은 request(req)에 query 형태로 접근
app.get("/getForm", (req, res) => {
  // req.query 구조 분해 할당 req.query.id, req.query.pw
  const { id, pw } = req.query;
  // result 페이지에 데이터 전송
  res.render("result", {
    title: "GET 요청 결과 확인",
    // key-value 형태에서 key 값과 value의 변수가 동일할 때는 value를 생략 가능하다.
    userInfo: { id, pw },
  });
});

// post 방식은 request(req)에 body 형태로 접근
app.post("/postForm", (req, res) => {
  // req.body 구조 분해 할당 req.body.id, req.body.pw
  const { id, pw } = req.body;
  // result 페이지에 데이터 전송
  res.render("result", { title: "POST 요청 결과 확인", userInfo: { id, pw } });
});

// router
// 페이지를 지정할 때 미들웨어 use를 사용한다.
// 단점: use는 http 전송 방식을 이해하지 못한다. 같은 url로 get, post를 만들 수 있지만 use로는 접근이 불가(엉뚱한 값을 찾게 된다.)
// 예를 들어, get 방식의 '/login'과 post 방식의 '/login'은 다른 페이지이지만 use는 동일한 페이지로 인식한다.
// app.use("/", (req, res) => {
//   // render("페이지 이름", 데이터): 페이지를 렌더링
//   res.render("index");
// });

app.get("/", (req, res) => {
  // render("페이지 이름", 데이터): 페이지를 렌더링
  res.render("index");
});

// use는 404 페이지일 때 사용!!!
app.use("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
