import "./App.css"; // App.css 파일을 불러옵니다.

function App() {
  const flag = true;
  const title = "Hello World";
  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true },
  ];
  const newUsers = users.filter((user) => {
    return user.vip === true;
  });
  console.log(newUsers);
  let txt = "";
  if (flag) {
    txt = "true입니다.";
  } else {
    txt = "false입니다.";
  }
  const name = "루이";
  const animal = "강아지";
  return (
    // jsx 요소에 반드시 부모 요소가 필요하다.
    <div>
      <h1>수업</h1>
      <h1 style={{ backgroundColor: "black", color: "white" }}>Hello React</h1>
      <div>{flag ? <h1>true입니다.</h1> : <h1>false입니다.</h1>}</div>
      <div>{txt}</div>
      <h1>실습1</h1>
      <div>
        이것은 div 태그입니다.
        <h3>이것은 div 태그 안에 있는 h3 태그입니다.</h3>
      </div>
      <div>{3 + 5 === 8 ? <h1>정답입니다!</h1> : <h1>오답입니다!</h1>}</div>
      <h1>실습 2</h1>
      <div>
        제 반려 동물의 이름은 <u>{name}</u>입니다.
      </div>
      <div>
        <u>{name}</u>는 <u>{animal}</u>입니다.
      </div>
      <h1>실습 3</h1>
      <div>
        <h1 className="text">{title}</h1>
        <div className="id">
          <label>아이디: </label>
          <input className="input"></input>
        </div>
        <br></br>
        <div className="pw">
          <label>비밀번호: </label>
          <input className="input"></input>
        </div>
      </div>
      <h1>실습 4</h1>
      <div className="rainbow">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
      <h1>실습 5</h1>
      <ul>
        {newUsers.map((value) => {
          return <li key={value.id}>{value.name}</li>;
        })}
        {newUsers.map((value, index) => {
          return <div key={index}>Hello {value}</div>;
        })}
        {newUsers.map((value) => (
          <div key={value.id}>{value.name}</div>
        ))}
      </ul>
    </div>
  );
}

export default App;
