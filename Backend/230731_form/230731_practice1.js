const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// router: app.get
app.get("/", (req, res) => {
  res.render("index");
});
// get으로 정보 받기
app.get("/getPage", (req, res) => {
  res.render("get");
});
app.get("/getResult", (req, res) => {
  console.log(req.query);
  res.render("result", { title: "get 방식", userInfo: req.query });
});
// post로 정보 받기
app.get("/postPage", (req, res) => {
  res.render("post");
});
app.post("/postResult", (req, res) => {
  res.render("result", { title: "post 방식", userInfo: req.body });
});

// 서버 open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
