import React, { createContext } from "react";

// Context 생성
// Provider와 Consumer 두 개의 리액트 컴포넌트를 반환한다.
const MyContext = createContext({
  language: "",
  setLanguage: () => {}, // 함수 형태라는 것을 알려줌
});

export default MyContext;
