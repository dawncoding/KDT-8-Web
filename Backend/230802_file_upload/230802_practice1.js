const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 8000;

// multer setting
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      console.log("filename: ", req.body);
      // 확장자 이름 분리
      const ext = path.extname(file.originalname);
      done(null, req.body.userId + Date.now() + ext);
    },
  }),
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB = 1024 * 1024 * 5
});

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적 파일 setting
app.use("/uploads", express.static(__dirname + "/uploads"));

// router
app.get("/", (req, res) => {
  res.render("230802_practice1"); // res.render("dynamic");
});
app.post("/result", uploadDetail.single("profile"), (req, res) => {
  console.log(req.file);
  res.render("result", {
    userInfo: req.body,
    profile: req.file.path,
  });
});

// server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
