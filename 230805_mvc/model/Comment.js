// 데이터베이스 선택하는 부분
exports.commentInfos = () => {
  // sql문이 실행됐다고 가정하고 반환
  return [
    {
      id: 1,
      userId: "helloworld",
      date: "2022-10-31",
      comment: "안녕하세요!",
    },
    {
      id: 2,
      userId: "happy",
      date: "2022-11-01",
      comment: "반가워요!",
    },
    {
      id: 3,
      userId: "lucky",
      date: "2022-11-02",
      comment: "신기하네요!",
    },
    {
      id: 4,
      userId: "bestpart",
      date: "2022-11-02",
      comment: "첫 댓글입니다!",
    },
  ];
};
