import { Link } from "react-router";
import USERS from "../data/users";

function Users() {
  return (
    <div>
      {USERS.map((user) => (
        <Link
          to={`/users/${user.id}`}
          key={user.id}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "0.75rem 1rem",
              margin: "0.5rem 0",
              maxWidth: "400px",
            }}
          >
            {user.firstName} {user.lastName}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Users;
