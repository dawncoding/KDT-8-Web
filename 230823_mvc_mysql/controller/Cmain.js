const model = require("../model/Model");

// GET
const main = (req, res) => {
  res.render("index");
};
// 회원 가입 페이지 열기
const signup = (req, res) => {
  res.render("signup");
};
// 로그인 페이지 열기
const signin = (req, res) => {
  res.render("signin");
};
// 회원 정보 조회 페이지 열기
const profile = (req, res) => {
  // req.params와 req.query의 차이
  console.log(req.params);
  model.db_profile(req.params, (result) => {
    res.render("profile", { data: result[0] });
  });
};

///////////////////////////////////////////////////////
// POST
// 회원 가입
const post_signup = (req, res) => {
  // 데이터베이스로 받은 정보 전달
  model.db_signup(req.body, () => {
    // view로 json 값을 보낸다.
    res.json({ result: true });
  });
  // 바로 프론트 실행하지 말고, postman 이용해서 테스트하기
};
// 로그인
const post_signin = (req, res) => {
  model.db_signin(req.body, (result) => {
    if (result.length > 0) {
      res.json({ result: true, data: result[0] });
    } else {
      res.json({ result: false });
    }
  });
};

///////////////////////////////////////////////////////
// PATCH
const edit_profile = (req, res) => {
  model.db_profile_edit(req.body, () => {
    res.json({ result: true });
  });
};

// res.render(뷰페이지이름, 데이터): 뷰페이지를 렌더링, 뷰: node.js가 제공하는 템플릿
// res.send(): 모든 데이터 타입(문자열, 배열, 객체, 숫자 등) 전송
// res.json(): 객체 형태 데이터 전송
// res.redirect(): 페이지를 이동시킨다.

// 이 형식의 장점: 생성할 함수 미리 지정
// module.exports는 맨 밑에 있어야 함
module.exports = {
  main,
  signup,
  signin,
  post_signup,
  post_signin,
  profile,
  edit_profile,
};
