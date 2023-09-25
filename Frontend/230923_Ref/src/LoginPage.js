import { useReducer } from "react";

export default function LoginPage() {
  const [state, dispatch] = useReducer(Reducer, {
    isLogin: false,
    message: "",
  });

  return (
    <div>
      {state.isLogin ? (
        <>
          <h1>환영합니다. </h1>
          <button onClick={() => dispatch({ type: "LOGOUT" })}>로그아웃</button>
        </>
      ) : (
        <LoginForm state={state} dispatch={dispatch} />
      )}
    </div>
  );
}
