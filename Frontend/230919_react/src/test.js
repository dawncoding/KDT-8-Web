import { Component } from "react";

class Test1Component extends Component {
  render() {
    const name = "김선진";
    const my_style = {
      backgroundColor: "blue",
      color: "orange",
      fontSize: "40px",
      padding: "12",
    };
    return (
      <>
        <h1>{name}</h1>
        <div style={my_style}>코딩온</div>
      </>
    );
  }
}

export default Test1Component;
