import styled from "styled-components";
import { useState } from "react";

const _StyledButton = styled.button`
  background-color: ${(props) => (props.isClicked ? "red" : "blue")};
  color: ${(props) => (props.isClicked ? "black" : "white")};
  cursor: pointer;
  padding: 10px;
`;

export default function StylePrac3() {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <_StyledButton onClick={onClick} isClicked={isClicked}>
        색상 변경
      </_StyledButton>
    </>
  );
}
