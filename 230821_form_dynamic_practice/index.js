const express = require("express");
const app = express();
const PORT = 8000;

const userInfo = { id: "kdt8", pw: "1234" };

//body-parser
app.use(express.json());
//view engine
app.set("view engine", "ejs");

//router
app.get("/", (req, res) => {
  res.render("index");
});
//post실습
app.get("/axiosPost", (req, res) => {
  res.render("post");
});
app.post("/resultPost", (req, res) => {
  // req.body.username, req.body.password의 객체 구조 분해 할당
  const { username, password } = req.body;
  // userInfo의 사용자값 비교
  if (username === userInfo.id && password === userInfo.pw) {
    // res.json(): application/json 형태로 응답할 때 사용한다.
    // json() 안에는 객체가 꼭 들어가야 한다.
    res.json({ result: true, userInfo: { id: username, pw: password } });
    // const res = {
    //   config: {},
    //   data: { result: true, userInfo: { id: username, pw: password } },
    //   status: "ok",
    // };
  } else {
    res.json({ result: false });
  }
});

//server start
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
