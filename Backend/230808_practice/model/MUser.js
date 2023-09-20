const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "user",
  password: "1234",
  database: "kdt8",
});

conn.connect((err) => {
  if (err) {
    console.log("error");
    return;
  }
  console.log("connect");
});

// 회원가입
exports.postSignUpInfo = (data, callback) => {
  console.log("회원가입");
  const query = `INSERT INTO user (userid, name, pw) VALUES ('${data.userId}', '${data.userName}', '${data.userPw}');`;
  conn.query(query, (err, rows) => {
    console.log("singup", rows);
    callback(rows);
  });
};

// 로그인
exports.postSignInInfo = (userId, callback) => {
  console.log("로그인하기 위한 회원 정보 조회");
  console.log(userId);
  const query = `SELECT * FROM user WHERE userid=${userId}`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log("Error while query user info: ", err);
      callback(null);
      return;
    }
    callback(rows[0]);
  });
};
