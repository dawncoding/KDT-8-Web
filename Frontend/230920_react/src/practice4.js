import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      title: "",
      authors: [], // authors 초기화
      tableData: [], // tableData 초기화
      searchAuthor: "", // 검색어 초기화
    };

    // 이벤트 핸들러 바인딩
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.addContent = this.addContent.bind(this);
    this.handleSearchAuthorChange = this.handleSearchAuthorChange.bind(this);
    this.searchContent = this.searchContent(this);
  }

  // 작성자 입력값 변경 시 호출되는 메서드
  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  // 제목 입력값 변경 시 호출되는 메서드
  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  // "작성" 버튼 클릭 시 호출되는 메서드
  addContent() {
    // 현재 입력한 작성자와 제목을 가져와서 상태에 추가
    const newAuthor = this.state.author;
    const newTitle = this.state.title;
    const authors = [...this.state.authors, newAuthor];
    const tableData = [
      ...this.state.tableData,
      { author: newAuthor, title: newTitle },
    ];

    this.setState({ authors, tableData, author: "", title: "" });
  }

  handleSearchAuthorChange(event) {
    this.setState({ searchAuthor: event.target.value });
  }

  searchContent() {
    const searchAuthor = this.state.searchAuthor;
    const filteredData = this.state.tableData.filter(
      (data) => data.author === searchAuthor
    );
    // 필터링된 데이터를 상태에 저장
    this.setState({ tableData: filteredData });
  }

  render() {
    return (
      <div>
        <br></br>
        <fieldset>
          <label>작성자: </label>
          <input
            type="text"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          ></input>
          <label>제목: </label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
          ></input>
          <button onClick={this.addContent}>작성</button>
        </fieldset>
        <br></br>
        <select>
          <option>작성자</option>
          <option>제목</option>
        </select>
        <input
          type="text"
          value={this.state.searchAuthor}
          onChange={this.handleSearchAuthorChange}
        ></input>
        <button onClick={this.searchContent}>검색</button>
        <br></br>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tableData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.title}</td>
                <td>{data.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form;
