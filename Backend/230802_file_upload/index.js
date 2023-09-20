const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적 파일 설정
app.use("/uploads", express.static(__dirname + "/uploads"));

// multer setting
const upload = multer({
  // dest: 업로드할 파일을 저장할 경로를 지정한다.
  dest: "uploads/",
});

const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  // diskStorage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
  storage: multer.diskStorage({
    // done = 콜백
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/", (req, res) => {
  res.render("index");
});

// 싱글
// /upload = form action="/upload"
// upload.single의 upload = const upload
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
});

// 멀티(ver1)
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
});

// 멀티(ver2)
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
  }
);

// 동적
app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    console.log(req.file);
    res.send(req.file);
  }
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
