import { Component } from "react";

class Board extends Component {
  constructor(props) {
    super(props);
    // state 초기화
    this.state = {
      inputWriter: "", // 작성자
      inputTitle: "", // 제목
      comments: [], // 입력한 내용
    }; // state: 객체 형태
    // 바인딩
    this.onChange = this.onChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  onChange(e) {
    // console.log(e.target);
    // e.target => input 태그
    // input 태그의 value가 필요해서 e.target.value로 설정
    this.setState({ inputWriter: e.target.value });
  }

  addComment() {
    const newComment = {
      writer: this.state.inputWriter,
      title: this.state.inputTitle,
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      inputTitle: "",
      inputWriter: "",
    });
  }

  render() {
    // 객체 구조 분해 할당
    const { inputWriter, inputTitle, comments } = this.state;

    return (
      <>
        <form>
          <label htmlFor="writer">작성자: </label>
          {/* onChange: input, textarea, select 값이 변경될 때마다 발생하는 이벤트 핸들러 */}
          <input
            type="text"
            id="writer"
            value={inputWriter}
            onChange={(e) => this.onChange(e)}
          ></input>
          <label htmlFor="title">제목: </label>
          <input
            type="text"
            id="title"
            value={inputTitle}
            // 하단의 함수 형태가 더 많이 사용된다.
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
          ></input>
          <button type="button" onClick={this.addComment}>
            작성
          </button>
        </form>
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {/* comments 형태 -> [{title, writer}, {title, writer}, ...] */}
            {/* {title, writer} 한 개가 value */}
            {comments.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Board;
