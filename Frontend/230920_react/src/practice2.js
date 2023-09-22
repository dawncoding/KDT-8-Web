import { Component } from "react";

class ChangeColor extends Component {
  state = { color: "black", text: "검정색" };

  changeRed = () => {
    this.setState({
      color: "red",
      text: "빨간색",
    });
  };

  changeBlue = () => {
    this.setState({
      color: "blue",
      text: "파란색",
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.state.text} 글씨</h1>
        <button onClick={this.changeRed}>빨간색</button>
        <button onClick={this.changeBlue}>파란색</button>
      </div>
    );
  }
}

export default ChangeColor;
