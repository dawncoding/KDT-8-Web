const express = require("express");
const router = express.Router();
const controller = require("../controller/Cstudent");

router.get("/", controller.index);
router.get("/student", controller.get_student);

// 학생 등록
router.post("/student", controller.post_student);
// 강의 등록
router.post("/class", controller.post_class);

module.exports = router;
