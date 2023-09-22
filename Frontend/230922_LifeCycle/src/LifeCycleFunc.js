import { useState, useEffect } from "react";

// 자식 컴포넌트
// function MyComponent(props) -> <div>My Component {prop.number}</div>
// function MyComponent(props) -> const {number} = props; <div>My Component {number}</div>
function MyComponent({ number }) {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("항상 실행됩니다.");
  });
  useEffect(() => {
    console.log("생성될 때 실행됩니다.");

    return () => {
      console.log("제거될 때 실행됩니다.");
    };
  }, []);
  useEffect(() => {
    console.log("state가 변경될 때");
  }, [text]);

  return (
    <>
      <div>My Component Func {number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(() => number + 1);
  };

  const changeVisibleState = () => {
    setVisible(() => !visible);
  };

  return (
    <>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>ON/OFF</button>
      {visible && <MyComponent number={number} />}
      {/* <MyComponent props={state}/> */}
    </>
  );
}
