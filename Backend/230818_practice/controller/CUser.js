const models = require("../models");
const { Op } = require("sequelize");

let hash = "";

exports.index = (req, res) => {
  res.render("index");
};

// GET

exports.signup = (req, res) => {
  res.render("signup");
};
exports.signin = (req, res) => {
  res.render("signin");
};

// POST

exports.post_signup = (req, res) => {
  // sequelize
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    res.send({ result: true });
  });
};

exports.post_signin = (req, res) => {
  models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then((result) => {
    res.send({ result: true, data: result[0] });
  });
};

// Bcrypt
const bcrypt = require("bcrypt");
const saltNumber = 10;
// 암호화
const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, saltNumber);
};
// 비교
const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};
