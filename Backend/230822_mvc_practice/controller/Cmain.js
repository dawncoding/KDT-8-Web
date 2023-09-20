const Users = require("../model/Model");

exports.main = (req, res) => {
  res.render("index", { users: Users });
};

exports.register = (req, res) => {
  // 프론트에서 보내준 데이터 입력
  const { name, gender, major } = req.body;
  Users.push({
    id: Users.length + 1,
    name,
    gender,
    major,
  });
  console.log(Users);
  // 배열
  res.send(Users);
};
