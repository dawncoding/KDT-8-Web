import { Link, useSearchParams } from "react-router-dom";

export const users = [
  {
    id: 1,
    name: "홍길동",
    comment: [{ text: "안녕하세요." }],
  },
  {
    id: 2,
    name: "이몽룡",
    comment: [
      {
        text: "반갑습니다.",
      },
    ],
  },
  {
    id: 3,
    name: "임꺽정",
    comment: [
      {
        text: "어서오세요.",
      },
    ],
  },
];

export default function User() {
  // searchParams는 쿼리스트링 값을 가져오는 것
  // setSearchParams는 쿼리스트링 값을 할당하는 것
  const [searchParams, setSearchParams] = useSearchParams();
  // url에 http://localhost:3000/user?mode=Dark 이런 식으로 입력하면,
  // console에 dark가 출력된다.
  // console.log(searchParams.get("mode"));
  // setTimeout(() => {
  //   setSearchParams({ mode: "Light" });
  // }, 3000);
  return (
    <div>
      <ul>
        {users.map((value) => {
          return (
            <li key={value.id}>
              <Link to={`/user/${value.id}`}>{value.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
