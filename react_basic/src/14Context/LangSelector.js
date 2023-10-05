import { useContext } from "react";
import MyContext from "./store/lang-context";

export default function LanguageSelector() {
  // 찻반쩨 방법: Consumer 이용
  //   return (
  //     <MyContext>
  //       {(value) => {
  //         return (
  //           <div>
  //             <h2>현재 선택된 언어: {value.language}</h2>
  //             <select value={value.language} onChange={(e) => value.setLanguage}>
  //               <option value="ko">한국어</option>
  //               <option value="jp">일본어</option>
  //               <option value="en">영어</option>
  //             </select>
  //           </div>
  //         );
  //       }}
  //     </MyContext>
  //   );

  // 두번째 방법: useContext 이용
  const value = useContext(MyContext);
  return (
    <div>
      <h2>현재 선택된 언어: {value.language}</h2>
      <select value={value.language} onChange={(e) => value.setLanguage}>
        <option value="ko">한국어</option>
        <option value="jp">일본어</option>
        <option value="en">영어</option>
      </select>
    </div>
  );
}
