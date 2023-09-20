const express = require("express");
const router = express.Router();
const controller = require("../controller/user");

router.get("/", controller.index);
router.get("/register", controller.get_register);
//로그인
//회원가입
router.post("/register", controller.register);

module.exports = router;
