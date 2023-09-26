import styled from "styled-components";

const _BoxOne = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;

// props를 이용하는 방법
const _BoxTwo = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;

// 상속 받아서 이용하는 방법
const _CircleOne = styled(_BoxTwo)`
  /* background-color: ${(props) => props.color};
  width: 100px;
  height: 100px; */
  border-radius: 50px;
`;

// 기존 태그를 이름만 바꿔서 사용하는 방법 -> as라는 키워드 사용
const _Btn = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
`;

// 태그 옵션 넣는 방법
const _Input = styled.input.attrs({ required: true })``;

// 중첩
const _BoxThree = styled.div`
  width: 200px;
  height: 100px;
  background-color: aqua;
  line-height: 100px;
  text-align: center;

  // 다른 컴포넌트를 불러와서 사용할 때
  ${_Input} {
    background-color: yellow;
  }

  p {
    color: red;
    font-weight: 900;

    &:hover {
      font-size: 32px;
    }
  }
`;

export default function StyledComponent() {
  return (
    <div>
      <_BoxOne as="header"></_BoxOne>
      <_BoxTwo color="red"></_BoxTwo>
      <_BoxTwo color="orange"></_BoxTwo>
      <_BoxTwo color="yellow"></_BoxTwo>
      <_BoxThree>
        <p>Hello Styled</p>
        <_Input></_Input>
      </_BoxThree>
      <_CircleOne color="green" />
      <_Btn as="a" href="https://naver.com">
        클릭
      </_Btn>
      <_Input />
    </div>
  );
}
