import EventClass from "./EventClass";
import EventFunction from "./EventFunction";
import PracticeClass from "./practice1";
import Counter from "./Counter";
import ChangeColor from "./practice2";
import Disappear from "./practice3";
// import Form from "./practice4";
import Board from "./answer_practice3";
import ClassState4 from "./answer_practice4";

function App() {
  return (
    <>
      <EventFunction />
      <EventClass />
      <PracticeClass message={"메시지"} />
      <Counter />
      <ChangeColor />
      <Disappear />
      {/* <Form /> */}
      <Board />
      <ClassState4 />
    </>
  );
}

export default App;
