import { useState } from "react";

export default function Form() {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    const newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    setComments([...comments, newComment]);
    setInputWriter("");
    setInputTitle("");
  };

  return (
    <div>
      <fieldset>
        <form>
          <label htmlFor="writer">작성자: </label>
          <input
            type="text"
            id="writer"
            value={inputWriter}
            onChange={(e) => setInputWriter(e.target.value)}
          ></input>
          <label htmlFor="title">제목: </label>
          <input
            type="text"
            id="title"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          ></input>
          <button type="button" onClick={addComment}>
            작성
          </button>
        </form>
      </fieldset>

      <form>
        <select>
          <option>작성자</option>
          <option>제목</option>
        </select>
        <input></input>
        <button>검색</button>
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
          {/* [ {title, writer},{title, writer},{title, writer}... ] */}
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
    </div>
  );
}
