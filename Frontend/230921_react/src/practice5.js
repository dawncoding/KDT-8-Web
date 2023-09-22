import { useState } from "react";
export default function UseStatePrac5() {
  const [todos, setTodos] = useState([]); // 할 일 목록
  const [inputTodo, setInputTodo] = useState(""); // input에 입력할 값

  const addTodo = () => {
    if (todos.length > 10) {
      alert("할 일이 너무 많습니다.");
    }
    if (inputTodo !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputTodo,
        checked: false,
      };
      setTodos([...todos, newTodo]);
      setInputTodo(""); // 입력 완료 후, input에 입력된 값 초기화
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };

  const removeTodo = () => {
    setTodos(todos.filter((todo) => todo.checked === false));
  };

  return (
    <>
      <input
        type="text"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        placeholder="할 입을 입력해주세요."
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {/* todos.map((todo, index)) 이렇게 설정할 경우 버그 발생 */}
        {/* 추가만 하면 상관없는데, 추가했다가 삭제하니까 이럴 때에는, index 사용하는 것이 적절하지 않음 */}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.text}
            </li>
          );
        })}
      </ul>
      <button onClick={removeTodo}>완료된 할 일 삭제</button>
    </>
  );
}
