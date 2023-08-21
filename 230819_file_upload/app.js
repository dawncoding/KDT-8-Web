const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

const upload = multer({
  dest: "uploads/", // dest: 업로드 파일 경로 지정
});

// multer 세부 설ㅓ
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  // diskStorage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
  storage: multer.diskStorage({
    // destination: 경로 설정
    // done: callback 함수
    destination(req, file, done) {
      done(null, "uploads/");
    },
    // 가정) apple.png 파일을 업로드
    filename(req, file, done) {
      // file.originalname에서 "확장자" 추출 => png
      const ext = path.extname(file.originalname);

      // path.basename(file.originalname, ext) => apple (확장자 제거한 파일 이름만!!)
      // Date.now() => 현재 시간 => 1970년 1월 1일 0시 0분을 기준으로 현재까지 경과된 밀리초
      // [파일명 + 현재시간.확장자] 형식으로 파일 업로드
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  // 5MB로 파일 크기 제한
  // 5 * 2^10 = 5KB
  // 5 * 2^10 * 2^10 = 5MB
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");
// 미들웨어 등록할 때 use() 사용
// __dirname: 절대 경로
// __filename
app.use("/views", express.static(__dirname + "/views"));
app.use("/uploads", express.static(__dirname + "/uploads"));
// body-parser 설정
app.use(express.urlencoded({ extended: true }));
// json 형태로 받겠다고 명시
app.use(express.json());

// 기본 경로(http://localhost:8000)로 index.ejs를 보여주겠다
app.get("/", (req, res) => {
  res.render("index");
});

// 싱글 파일 업로드
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  // req.file: 파일 업로드 성공 결과 (업로드한 파일 정보)
  console.log(req.file);
  // req.body: title 데이터 정보 확인 가능 (form에 입력한 정보)
  console.log(req.body);
  res.send("Upload!!");
});

// 멀티(ver1)
// array(): 여러 파일을 한 번에 업로드할 때 사용
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  // req.file: [{}, {}, ...] 배열 형태로 각 파일 정보 가짐
  console.log(req.files);
  // req.body: title 데이터 정보 확인 가능
  console.log(req.body);
  res.send("Upload Multiple Each!!");
});

// 멀티(ver2)
// fields(): 여러 파일을 각각 input에 업로드할 때 사용
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    // req.files: {userfile1: [{}], userfile2: [{}]} 형태로 각 파일 정보 제공
    console.log(req.files);
    // req.body: title 데이터 정보 확인 가능
    console.log(req.body);
    res.send("Upload Multiple Each!!");
  }
);

// 동적
app.post("/dynamic", uploadDetail.single("dynamic-file"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send(req.file);
});

// 서버 오픈
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
