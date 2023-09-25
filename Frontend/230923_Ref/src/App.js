import LoginPage from "./LoginPage";
import RefSample from "./RefClass1";
import RefSample2 from "./RefClass2";
import RefFunc1 from "./RefFunc1";
import RefFunc2 from "./RefFunc2";
import ParentComponent from "./UseCallback";
import UseMemo from "./UseMemo";
import Practice1 from "./practice1";
import Practice2 from "./practice2";

function App() {
  return (
    <div className="App">
      {/* <RefSample /> */}
      {/* <RefSample2 /> */}
      {/* <Practice1 /> */}
      {/* <RefFunc1 /> */}
      {/* <RefFunc2 /> */}
      <Practice2 />
      <UseMemo />
      <ParentComponent />
      <LoginPage />
    </div>
  );
}

export default App;
