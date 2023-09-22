import { useState, useEffect } from "react";
import axios from "axios"; // Axios 라이브러리를 가져옵니다.

export default function UserEffectPrac2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Axios를 사용하여 데이터를 가져옵니다.
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // 데이터를 성공적으로 가져오면 상태에 저장합니다.
        setUsers(response.data);
        console.log(
          "유저 정보 업데이트 - 현재 사용자 수: ",
          response.data.length
        );
      })
      .catch((error) => {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      });
  }, []); // 빈 배열을 사용하여 이 효과는 한 번만 실행됩니다.

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>
              {user.name} - {user.email}
            </h2>
          </li>
        ))}
      </ul>
    </>
  );
}
