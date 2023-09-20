const express = require("express");
const app = express();
const PORT = 8000;
require("dotenv").config(); // env에 있는 파일을 읽으라는 뜻

let hash = "";

//ejs
app.set("view engine", "ejs");
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get("/", (req, res) => {
  console.log(process.env.NAME);
  console.log(process.env.STATUS);
  console.log(process.env.NODE_ENV);
  res.render("index");
});

app.post("/hash", (req, res) => {
  const { pw } = req.body;
  // const hash = createHashedPassword(pw);
  // hash = createPdkdf(pw);
  hash = bcryptPassword(pw);
  res.json({ hash });
});

app.post("/verify", (req, res) => {
  const { pw } = req.body;
  // const compare = verifyPassword(pw, salt, hash);
  const compare = comparePassword(pw, hash);
  res.json({ compare });
});

app.post("/cipher", (req, res) => {
  const { data } = req.body;
  const encrypt = cipherEncrypt(data);
  console.log(encrypt);
  const decrypt = decipher(encrypt);
  console.log(decrypt);
  res.json({ decrypt });
});

//server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const crypto = require("crypto"); // 내장 모듈이기 때문에 따로 설치할 필요 없다.

// functions
const createHashedPassword = (password) => {
  // createHash(알고리즘).update(암호화할 값).digest(인코딩 방식)
  return crypto.createHash("sha512").update(password).digest("base64");
};

// salt 생성
const salt = crypto.randomBytes(16).toString("base64");
// 반복 횟수
const iterations = 100;
// 생성할 키의 길이
const keylen = 64;
// 해시 알고리즘
const digest = "sha512";

// 단방향 암호화
// 암호 생성
const createPdkdf = (password) => {
  // pbkdf2(비밀번호, salt, 반복 횟수, 생성한 키의 길이, 해시 알고리즘)
  // 반환되는 값은 Buffer 값 -> Buffer 값은 데이터베이스에 들어가지 못하기 때문에 toString()을 통해 변환하여 저장해야 한다.
  const hash = crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest)
    .toString("base64");
  return hash;
};

// 암호 비교
// verifyPassword(입력한 비밀번호, salt, db에 저장된 비밀번호)
const verifyPassword = (password, salt, dbPassword) => {
  const compare = crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest)
    .toString("base64");
  if (compare === dbPassword) {
    return true;
  } else {
    return false;
  }
};

// 양방향 암호화
// 256비트 키를 사용, 블록 크기는 128비트
const algorithm = "aes-256-cbc";
// 1byte = 8bit
// 대칭키
const key = crypto.randomBytes(32); // 32byte * 8 = 256bit
// 초기화 벡터: 데이터 블록을 암호화할 때 보안성을 높이기 위해 사용
const iv = crypto.randomBytes(16); // 16byte * 8 = 128bit

// 암호화
const cipherEncrypt = (word) => {
  // 암호화 객체 생성
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  // 암호화할 데이터 처리
  // update(암호화 원본 데이터, 입력 인코딩, 출력 인코딩)
  let encryptedData = cipher.update(word, "utf-8", "base64");
  // 최종 결과 생성
  encryptedData += cipher.final("base64");
  return encryptedData;
};

// 복호화
const decipher = (encryptedData) => {
  // 복호화 객체 생성
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  // update(암호화 데이터, 입력 인코딩, 출력 인코딩)
  let decryptedData = decipher.update(encryptedData, "base64", "utf-8");
  // 최종 결과 생성
  decryptedData += decipher.final("utf-8");
  return decryptedData;
};

// Bcrypt
// 단방향 암호화
const bcrypt = require("bcrypt");
// bcrypt할 때 사용하는 salt는 정수이어야 한다.
// 보통 10, 11 설정
const saltNumber = 10;

// 암호화
const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, saltNumber);
};
// 비교
const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};
