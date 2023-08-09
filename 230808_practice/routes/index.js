const express = require("express");
const router = express.Router();
const controller = require("../controller/CUser");

// GET
// /user
router.get("/", (req, res) => {
  res.render("index");
});
// /user/signup
router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/signin", (req, res) => {
  res.render("signin");
});

// 회원가입
router.post("/signup", controller.postSignUpInfo);

module.exports = router;
