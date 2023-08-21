const { User } = require("../models");
const bcrypt = require("bcrypt");

exports.index = (req, res) => {
  res.render("index");
};

exports.get_register = (req, res) => {
  res.render("register");
};

exports.get_login = (req, res) => {
  res.render("login");
};

// 회원가입
exports.register = async (req, res) => {
  try {
    // 구조 분해 할당
    const { userid, pw, name } = req.body;
    const hashPw = bcryptPassword(pw);
    const result = await User.create({
      userid,
      name,
      pw: hashPw,
    });
    if (result) {
        res.json({result; true})
    }
  } catch (error) {
    console.log(error);
  }
};

const bcryptPassword = (pw) => {
  return bcrypt.hashSync(pw, 10); // 10 = saltNumber
};
