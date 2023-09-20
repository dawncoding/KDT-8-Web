import { Component } from "react";
// import React from "react";
// -> class ClassComponent extends React.Component {}
import PropTypes from "prop-types";

// 클래스형 컴포넌트
// class 컴포넌트명 extends Component(상속)
class ClassComponent extends Component {
  // 클래스형 컴포넌트에서는 render 함수는 필수이다.
  // 클래스에서 함수를 정의할 때, function이라는 키워드 사용할 필요 없다.
  render() {
    // const name = "김선진";
    const { name } = this.props;

    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <p>여기는 클래스형 컴포넌트</p>
        <h1>{name}</h1>
      </>
    );
  }
}

ClassComponent.defaultProps = {
  name: "홍길동",
};

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ClassComponent;
