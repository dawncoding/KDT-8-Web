const { DataTypes } = require("sequelize");
const Model = (sequelize) => {
  // sequelize는 테이블의 이름을 복수형으로 만든다.
  return sequelize.define("user", {
    // 컬럼 정의
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // NOT NULL
      primaryKey: true,
      autoIncrement: true,
    },
    userid: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    pw: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });
};

module.exports = Model;
