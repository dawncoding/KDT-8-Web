const User = require("../model/MUser");

// 회원가입
exports.postSignUpInfo = (req, res) => {
  User.postSignUpInfo(req.body, (userInfo) => {
    res.send({
      userInfo: true,
      userId: req.body.userId,
      userName: req.body.userName,
      userPw: req.body.userPw,
    });
  });
};

// 로그인하기 위한 회원 정보 조회
exports.postSignInInfo = (req, res) => {
  User.postSignInInfo(req.body, (userInfo) => {
    if (userInfo) {
      res.send({
        success: true,
        message: "로그인 성공",
        userData: userInfo,
      });
    } else {
      res.send({ success: false, message: "로그인 실패" });
    }
  });
};
