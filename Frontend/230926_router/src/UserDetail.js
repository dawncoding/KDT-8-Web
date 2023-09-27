import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "./User";

export default function UserDetail() {
  // Route에 /user/:userId로 설정했기 때문에 userId라고 설정했다.
  const { userId } = useParams();
  return (
    <>
      <div>
        사용자는 {userId}은/는 {users[Number(userId) - 1].name}입니다.
      </div>
      <Link to="comment">Comment</Link>
      <Outlet context={{ comment: users[Number(userId) - 1].comment }} />
    </>
  );
}
