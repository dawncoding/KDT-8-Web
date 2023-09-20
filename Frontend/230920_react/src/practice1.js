import React, { Component } from "react";

class PracticeClass extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(this.props.message);
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Show Message</button>
      </>
    );
  }
}

export default PracticeClass;
