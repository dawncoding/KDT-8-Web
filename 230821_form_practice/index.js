const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//router
app.get("/", (req, res) => {
  res.render("index");
});

//get으로 정보 받기
app.get("/getPage", (req, res) => {
  res.render("get");
});

app.get("/resultGet", (req, res) => {
  console.log(req.query);
  const { username, gender, birthYear, birthMonth, birthDay, hobby } =
    req.query;
  res.render("result", {
    title: "GET 요청 결과 확인",
    userInfo: {
      username,
      gender,
      birthYear,
      birthMonth,
      birthDay,
      hobby,
      color: { result: false, color: "null" },
      number: { result: false, number: "null" },
    },
    // userInfo: { req.query }로도 가능
  });
});

//post로 정보 받기
app.get("/postPage", (req, res) => {
  res.render("post");
});

app.post("/resultPost", (req, res) => {
  console.log(req.body);
  const {
    username,
    gender,
    birthYear,
    birthMonth,
    birthDay,
    hobby,
    color,
    number,
  } = req.body;
  res.render("result", {
    title: "POST 요청 결과 확인",
    userInfo: {
      username,
      gender,
      birthYear,
      birthMonth,
      birthDay,
      hobby,
      color: { result: true, color },
      number: { result: true, number },
    },
  });
});

//서버오픈
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
