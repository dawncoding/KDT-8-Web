import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import BugComponent from "./bug";
import Test1Component from "./test";
import Test2Component from "./test2";
import Food from "./food";
import "./App.css";
import Book from "./book";

function App() {
  return (
    <>
      <h1>컴포넌트</h1>
      <ClassComponent name="김선진"></ClassComponent>
      <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
      <FunctionComponent name="kdt8" age={12}>
        안녕
      </FunctionComponent>
      <ClassComponent />
      <BugComponent></BugComponent>
      <Test1Component></Test1Component>
      <Test2Component></Test2Component>
      <Food food="잔치국수"></Food>
      <Food></Food>
      <Book
        title={"나의 하루는 4시 40분에 시작된다."}
        author={"김유진"}
        price={"13,500원"}
        type={"자기계발서"}
      ></Book>
    </>
  );
}

export default App;
