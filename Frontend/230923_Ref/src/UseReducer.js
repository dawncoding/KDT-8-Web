import React, { useReducer } from "react";

// initialState는 카운터의 초기값
const initialState = { count: 0 };

// reducer는 상태와 액션을 받아 새로운 상태를 반환하는 함수
// 액션의 타입에 따라 다른 상태 반환
//

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("Invalid action type");
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        DECREMENT
      </button>
    </>
  );
}
