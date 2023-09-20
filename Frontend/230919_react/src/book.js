import book from "./grass.png";

const Book = ({ title, author, price, type }) => {
  return (
    <div className="box">
      <div className="best">이번주 베스트 셀러</div>
      <img src={book} width={200} className="book" />
      <div className="title">{title}</div>
      <div className="content">저자: {author}</div>
      <div className="content">판매가: {price}</div>
      <div className="content">구분: {type}</div>
    </div>
  );
};

export default Book;
