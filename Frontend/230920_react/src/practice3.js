import { Component } from "react";

class Disappear extends Component {
  state = { visible: true };

  handleDisappear = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.visible && "안녕하세요"}</h1>
        <button onClick={this.handleDisappear}>
          {this.state.visible ? "사라져라" : "보여라"}
        </button>
      </div>
    );
  }
}

export default Disappear;
