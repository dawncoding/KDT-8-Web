import { useRef } from "react";

export default function RefFunc2() {
  // 1. ref 객체 만들기
  const idRef = useRef(1);
  const plusIdRef = () => {
    idRef.current += 1;
    console.log(idRef.current);
  };
  return (
    <>
      <p>useRef 로컬 변수 사용</p>
      {/* rerendering 되지 않음 */}
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>plus ref</button>
    </>
  );
}
