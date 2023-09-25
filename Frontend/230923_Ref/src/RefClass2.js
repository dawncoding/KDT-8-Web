import React from "react";

class RefSample2 extends React.Component {
  myInput = React.createRef();
  handleFocus = () => {
    this.myInput.current.focus();
  };

  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>
        {/* 만들어진 변수 myInput 해당 요소의 ref prop로 넣어주면 ref 설정 완료 */}
        <input ref={this.myInput} />
        <button onClick={this.handleFocus}>focus(createRef)</button>
      </>
    );
  }
}

export default RefSample2;
