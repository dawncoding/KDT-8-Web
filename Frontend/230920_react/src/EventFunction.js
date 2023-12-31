function EventFunction() {
  const handleClick = () => {
    alert("클릭했습니다.");
  };

  const handleClick2 = (e, str) => {
    console.log(e);
    alert(str);
  };
  return (
    <>
      <button onClick={handleClick}>클릭</button>
      <button onClick={(e) => handleClick2(e, "클릭2")}>클릭2</button>
    </>
  );
}

export default EventFunction;
