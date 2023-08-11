"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 모델 정의
db.Student = require("./Students")(sequelize);
db.Classes = require("./Classes")(sequelize);
db.StudentProfile = require("./StudentProfile")(sequelize);

// 관계 형성
// 1:1 관계, 학생과 프로필
db.Student.hasOne(db.StudentProfile);
db.StudentProfile.belongsTo(db.Student);

// 1:다 관계, 학생과 강의
// 외래키 지정 안해줘도, sequelize가 자동으로 외래키 지정
db.Student.hasMany(db.Classes);
db.Classes.belongsTo(db.Student);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
