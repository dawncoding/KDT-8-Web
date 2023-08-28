const { User } = require("../models/User");

///////////////////////////////////////
//GET
const main = (req, res) => {
  res.render("index");
};
//회원가입 페이지
const signup = (req, res) => {
  res.render("signup");
};
//로그인 페이지
const signin = (req, res) => {
  res.render("signin");
};
//회원정보 조회 페이지
const profile = (req, res) => {
  console.log(req.params);
  //   model.db_profile(req.params, (result) => {
  //     res.render("profile", { data: result[0] });
  //   });

  // findOne(): 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체 반환
  User.findOne({
    // where는 객체 형태로 찾을 정보를 입력하면 된다.
    where: { id: req.params.init },
  }).then((result) => {
    res.render("profile", { data: result[0] });
  });
};

////////////////////////////////////////////////
//POST
//회원가입
const post_signup = (req, res) => {
  //   model.db_signup(req.body, () => {
  //     res.json({ result: true });
  //   });

  const { userid, name, pw } = req.body;
  // create(): 데이터 생성
  User.create({
    userid,
    name,
    pw,
  }).then(() => {
    res.json({ result: true });
  });
};

const post_signin = (req, res) => {
  model.db_signin(req.body, (result) => {
    if (result.length > 0) {
      res.json({ result: true, data: result[0] });
    } else {
      res.json({ result: false });
    }
  });
};

///////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
  //   model.db_profile_edit(req.body, () => {
  //     res.json({ result: true });
  //   });

  // update(수정될 정보를 객체 형태로 입력, 수정될 곳을 객체 형태로 입력)
  const { name, pw } = req.body;
  User.update(
    {
      name,
      pw,
    },
    { where: { id } }
  ).then(() => {
    res.json({ result: true });
  });
};

//res.render: 뷰페이지를 렌더링  render(뷰페이지이름, 데이터(선택)), 뷰 => node.js가 제공하는 템플릿
//res.send: 모든타입 데이터 전송(모든타입? 문자열, 배열, 객체, 숫자 )
//res.json: 객체타입 데이터 전송
//res.redirect: 페이지를 이동
module.exports = {
  main,
  signup,
  signin,
  profile,
  buy,
  post_signup,
  post_signin,
  edit_profile,
};
