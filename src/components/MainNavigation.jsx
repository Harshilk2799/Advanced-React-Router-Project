import { Link } from "react-router";

function MainNavigation() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
