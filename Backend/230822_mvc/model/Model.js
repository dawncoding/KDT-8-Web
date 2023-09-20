const mysql = require("mysql");

//mysql연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "kdt",
  password: "",
  database: "kdt",
  port: 3306,
});

const comments = [
  {
    id: 1,
    userid: "hello",
    date: "2023-08-01",
    comment: "ㅎㅇ",
  },
  {
    id: 2,
    userid: "happy",
    date: "2023-08-02",
    comment: "ㅇㅇ",
  },
  {
    id: 3,
    userid: "lucky",
    date: "2023-08-03",
    comment: "ㄹㅋ",
  },
  {
    id: 4,
    userid: "good",
    date: "2023-08-04",
    comment: "굿",
  },
];

module.exports = comments;
