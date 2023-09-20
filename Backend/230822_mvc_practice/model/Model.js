const mysql = require("mysql");

//mysql연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "kdt",
  password: "",
  database: "kdt",
  port: 3306,
});

const userInfo = [
  {
    id: 1,
    name: "a",
    gender: "여자",
    major: "컴퓨터공학",
  },
  {
    id: 2,
    name: "b",
    gender: "여자",
    major: "간호학",
  },
  {
    id: 3,
    name: "c",
    gender: "여자",
    major: "전기전자",
  },
  {
    id: 4,
    name: "d",
    gender: "남자",
    major: "경영학",
  },
  {
    id: 5,
    name: "e",
    gender: "남자",
    major: "일본어문학",
  },
];

module.exports = userInfo;
