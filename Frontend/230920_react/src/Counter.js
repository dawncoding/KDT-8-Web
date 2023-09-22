import { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       number: 0, // 초기값
  //     };
  //     // 바인딩
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // 화살표 함수로 사용할 때에는 하단 형태로 state 선언 가능하다.
  state = { number: 0 };

  handleIncrement() {
    // this.state.number++ <- 직접적으로 바꿀 수 없다.
    this.setState({ number: this.state.number + 1 });
  }

  handleDecrement = () => {
    // setState는 호출 직후에 상태가 바로 업데이트 되지 않는다.
    // React는 여러 setState 호출을 일괄 처리한다.
    // (2)의 setState가 (1)의 setstat의 결과를 기반으로 동작하지 않는다.
    // 2줄을 적어도 1씩 감소
    // this.setState({ number: this.state.number - 1 }); -- (1)
    // this.setState({ number: this.state.number - 1 }); -- (2)
    // 상단 형태와 같이 직접적으로 값을 변경하게 하는 것은 보안에 좋지 않다.

    // 2씩 감소
    this.setState((prevState) => ({ number: prevState.number - 1 }));
    this.setState((prevState) => ({ number: prevState.number - 1 }));
    // 상단 형태와 같이 사용해야 보안에도 좋다.
  };

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleIncrement}>증가</button>
        <button onClick={this.handleDecrement}>감소</button>
      </div>
    );
  }
}

export default Counter;
