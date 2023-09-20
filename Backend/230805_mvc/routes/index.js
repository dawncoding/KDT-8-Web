const express = require("express");
const controller = require("../controller/Cmain.js");
const router = express.Router();

// localhost:PORT/
router.get("/", controller.main); // GET /
router.get("/comments", controller.comments); // GET /comments = GET으로 /comments 경로에 들어왔을 때 controller.comments 함수가 실행되도록
router.get("/comment/:id", controller.comment); // Get /comment/:id

module.exports = router;
