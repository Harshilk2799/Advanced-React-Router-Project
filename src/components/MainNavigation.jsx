import { Link, NavLink } from "react-router";

// Link — just navigates, no idea if it's the current page
// NavLink — navigates AND tells you if it's active, so you can style it differently

function MainNavigation() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>

          {/* By default, NavLink matches partially — meaning / might stay "active"
          even when you're on /about (since every path starts with /).
          Adding end tells it: "only mark active if the path is EXACTLY /, not a sub-path." */}

          {/* <NavLink to="/users" end>Users</NavLink> */}

          {/* Here className receives a function with isActive as a boolean — you
          use it to conditionally apply an "active" class. */}
          {/* <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Users
          </NavLink> */}
        </li>
        <li>
          <NavLink to="/students">Students</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
