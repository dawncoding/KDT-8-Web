import mysql from "mysql2/promise";

// createConnection: 단일 연결할 때 사용, 매번 연결이 필요할 때마다 새로운 연결 생성 -> 연결 수가 많아지면 성능에 영향이 생김.
// createPool: 여러 연결할 때 사용, 여러 개의 연결을 미리 생성하고 관리. 요청이 들어올 때마다 생성한 연결을 할당. -> 동시 처리할 때 성능 향상
const conn = mysql.createPool({
  host: "127.0.01",
  user: "user",
  password: "1234",
  database: "kdt8",
});

export const post_signup = async (data) => {
  try {
    // const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`; -> 보안에 취약
    const query = `INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)`;
    // prepared query -> 보안성, 성능이 좋아짐
    const rows = await conn.query(query, [data.userid, data.name, data.pw]); // [] 안에 ?에 대응되는 값 넣어주면 된다.
    return rows;
  } catch (error) {
    console.log(error);
  }
};

exports.post_signin = (data, callback) => {
  const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}' `;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_signin", rows);
    callback(rows);
  });
};

exports.post_profile = (data, callback) => {
  const query = `SELECT * FROM user WHERE userid='${data.profile}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_profile", rows);
    callback(rows);
  });
};

exports.edit_profile = (data, callback) => {
  const query = `UPDATE user SET userid='${data.userid}', pw='${data.pw}', name='${data.name}' WHERE id=${data.id}`;
  conn.query(query, (err, rows) => {
    callback();
  });
};

exports.delete_profile = (id, callback) => {
  const query = `DELETE FROM user WHERE id=${id}`;
  conn.query(query, (err, rows) => {
    callback();
  });
};
