const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);

// 회원 가입
// 회원 가입 페이지 열기
router.get("/signup", controller.signup);
// 데이터베이스에 회원 정보 저장
router.post("/signup", controller.post_signup);

// 로그인
// 로그인 페이지 열기
router.get("/signin", controller.signin);
// 로그인하기
router.post("/signin", controller.post_signin);

// 회원 정보 조회
// 조회
// GET 조회 방식일 때는 url을 query string 또는 파라미터 방식으로 지정
// query string 방식은 페이지 이동을 안하며, 파라미터는 페이지 이동

// 파라미터 방식
router.get("/profile/:init", controller.profile);
// router.get("/주소이름/:주소이름") 이 방식이 쓰였다면, 이 명령어 밑에 router.get("/주소이름:주소이름")을 작성하면 안된다.
// 수정
router.patch("/profile/edit", controller.edit_profile);

module.exports = router;
