const mysql = require("mysql");

//mysql연결
// createConnection 단일 연결할 때 사용한다. -> 요청할 때마다 새로운 연결을 생성한다. 그래서 적은 수의 동시 연결이나 단순한 데이터베이스 쿼리일 때 사용한다.
// const conn = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "user",
//   password: "1234",
//   database: "kdt8",
//   port: 3306,
// });

// createPool 다중 연결할 때 사용한다. -> 연결 풀을 생성한다. 풀은 미리 정의된 수의 연결을 생성하고 관리한다. 요청이 들어오면, 연결 풀에서 사용 가능한 연결을 제공한다. 작업 완료 후, 해당 연결을 반환한다. 연결이 필요하지 않을 경우, 자동으로 반환하여 풀의 연결 수를 제한하고 관리를 최적화한다. -> 다중 연결 서비스에 적합하다.
const conn = mysql.createPool({
  host: "127.0.0.1",
  user: "user",
  password: "1234",
  database: "kdt8",
  port: 3306,
  // 최대 연결 수 (기본값은 10)
  connectionLimit: 30,
});

// 문자열 보간 방법
// `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`
// 단점
// 1. SQL 인젝션 공격 취약
// 2. 문자열에 특수 문자가 포함될 경우 오류가 발생할 수도 있다.
// Prepared Statement
// INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)

// 회원 가입 정보 데이터베이스에 저장
// Cmain.js의 post_signup 함수에서 보낸 데이터를 받는다.
const db_signup = (data, cb) => {
  /// 문자열 보간 방법
  //   const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;

  //   conn.query(query, (err, rows) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     // rows 변수를 통해 결과값 확인
  //     console.log("db_signup", rows);
  //     // query문이 실행되서 완료되면 callback 함수 실행
  //     // query가 오류 없이 잘 실행된다면, callback 함수 실행
  //     cb();
  //   });

  // Prepared statement로 변경
  const query = "INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)";
  conn.query(query, [data.userid, data.pw, data.name], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    // rows 변수를 통해 결과값 확인
    console.log("db_signup", rows);
    // query문이 실행되서 완료되면 callback 함수 실행
    // query가 오류 없이 잘 실행된다면, callback 함수 실행
    cb();
  });
};

const db_signin = (data, cb) => {
  // 실무에서는 userid 존재 여부부터 체크
  // 빈 매열이 오면, 회원이 존재하지 않다는 것
  // 빈 배열이 아니면, 배열에 있는 pw 값과 사용자가 입력한 pw 비교
  // pw 값 일치하면 로그인
  // 동시에 아이디와 비밀번호 체크하면 안된다.

  // 문자열 보간 방법
  //   const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
  //   conn.query(query, (err, rows) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log("db_signin", rows);
  //     // query가 오류 없이 잘 실행된다면, callback 함수 실행
  //     cb(rows);
  //   });

  // prepared statement로 변경
  const query = "SELECT * FROM user WHERE userid = ? AND pw = ?";
  // 배열에 데이터 넣을 때, query에 데이터 넣는 순서 지켜야 한다.
  conn.query(query, [data.userid, data.pw], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("db_signin", rows);
    // query가 오류 없이 잘 실행된다면, callback 함수 실행
    cb(rows);
  });
};

const db_profile = (data, cb) => {
  const query = "SELECT * FROM user WHERE id = ?";
  conn.query(query, [data.init], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("db_profile", rows);
    cb(rows);
  });
};
// 프로필 수정
const db_profile_edit = (data, cb) => {
  const query = "UPDATE user SET userid = ?, name = ?, pw = ? WHERE id = ?";
  conn.query(query, [data.userid, data.name, data.pw, data.id], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("db_profile_edit", rows);
    cb(rows);
  });
};

module.exports = {
  db_signup,
  db_signin,
  db_profile,
  db_profile_edit,
};
