import { Component } from "react";
import grass from "./grass.png";

class Test2Component extends Component {
  render() {
    const style = {
      color: "orange",
      fontSize: "40px",
      marginTop: "20",
    };
    return (
      <>
        <div style={style}>
          <h2>안녕하세요</h2>
          <img src={grass} alt="grass"></img>
        </div>
      </>
    );
  }
}

export default Test2Component;
