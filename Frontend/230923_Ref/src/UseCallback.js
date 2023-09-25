import React, { useState, useCallback } from "react";

export default function ParentComponent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("not useCallback count: ", count);
  };
  const incrementCount = useCallback(() => {
    console.log("count: ", count);
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ChildComponent1 onClick={incrementCount} />
      <ChildComponent2 />
      <p>Count: {count}</p>
    </>
  );
}

function ChildComponent1({ onClick }) {
  console.log("child component render");
  return <button onClick={onClick}>increment Count</button>;
}

function ChildComponent2() {
  return <button>Child Component2</button>;
}
