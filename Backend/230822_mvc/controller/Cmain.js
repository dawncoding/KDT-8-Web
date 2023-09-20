const commentsModel = require("../model/Model");

const main = (req, res) => {
  res.render("index");
};

const comments = (req, res) => {
  res.render("comments", { lists: commentsModel });
};

const comment = (req, res) => {
  // 클릭한 id의 정보 {id: ''}가 출력
  console.log(req.params);
  res.render("comment", { data: commentsModel[Number(req.params.id) - 1] });
};

module.exports = {
  main,
  comments,
  comment,
};

// 모듈 사용 방법 1
// const test = () => {};
// module.exports = test;
// 모듈 사용 방법 2
// module.exports.test2 = "함수, 변수 등 모두 사용 가능";
// exports.test2 = "함수, 변수 등 모두 사용 가능"; // 생략형
