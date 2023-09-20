const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 해당 폴더의 index.js는 생략 가능하다.
// const router = require("./routes")
// const router = require("./routes/index")
const router = require("./routes/main");
app.use("/", router);

//오류처리
app.use("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
