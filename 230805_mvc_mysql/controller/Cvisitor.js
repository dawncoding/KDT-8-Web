const Visitor = require("../model/Visitor");

// GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render("index");
};

// Get /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  // mysql 연결 전
  // console.log(Visitor.getVisitors());
  // res.render("visitor", { data: Visitor.getVisitors() });

  // mysql 연결 후
  Visitor.getVisitors((result) => {
    console.log("Cvisitor: ", result);
    res.render("visitor", { data: result });
  });
};
