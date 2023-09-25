import React, { Component } from "react";

class Practice1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputWriter: "",
      inputTitle: "",
      comments: [],
      inputSearch: "",
      searchType: "title",
      results: [],
    };

    // 작성자와 제목 input 요소에 대한 ref 생성
    this.writerInputRef = React.createRef();
    this.titleInputRef = React.createRef();
  }

  checkInputValue = () => {
    if (this.state.inputWriter.trim().length === 0) {
      this.writerInputRef.current.focus();
      return false;
    }
    if (this.state.inputTitle.trim().length === 0) {
      this.titleInputRef.current.focus();
      return false;
    }
    return true;
  };

  addComment = () => {
    const { inputWriter, inputTitle, comments } = this.state;
    if (!this.checkInputValue()) {
      return;
    }
    const newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    this.setState({
      comments: [...comments, newComment],
      inputWriter: "",
      inputTitle: "",
    });

    // 작성자 input 요소에 포커스 설정
    this.writerInputRef.current.focus();
  };

  searchComment = () => {
    const { comments, inputSearch, searchType } = this.state;
    const searchResult = comments.filter((value) => {
      const type = value[searchType];
      const include = type.includes(inputSearch);
      return include;
    });
    this.setState({
      results: searchResult,
    });
  };

  render() {
    const {
      inputWriter,
      inputTitle,
      comments,
      inputSearch,
      searchType,
      results,
    } = this.state;

    return (
      <div>
        <fieldset>
          <form>
            <label htmlFor="writer">작성자: </label>
            <input
              type="text"
              id="writer"
              value={inputWriter}
              onChange={(e) => this.setState({ inputWriter: e.target.value })}
              ref={this.writerInputRef} // 작성자 input 요소에 ref 연결
            ></input>
            <label htmlFor="title">제목: </label>
            <input
              type="text"
              id="title"
              value={inputTitle}
              onChange={(e) => this.setState({ inputTitle: e.target.value })}
              ref={this.titleInputRef} // 제목 input 요소에 ref 연결
            ></input>
            <button type="button" onClick={this.addComment}>
              작성
            </button>
          </form>
        </fieldset>

        <form>
          <select
            value={searchType}
            onChange={(e) => this.setState({ searchType: e.target.value })}
          >
            <option value="writer">작성자</option>
            <option value="title">제목</option>
          </select>
          <input
            type="text"
            placeholder="검색어"
            value={inputSearch}
            onChange={(e) => this.setState({ inputSearch: e.target.value })}
          />
          <button type="button" onClick={this.searchComment}>
            검색
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
        <h4>검색결과</h4>
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {results.map((value, index) => {
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
      </div>
    );
  }
}

export default Practice1;
