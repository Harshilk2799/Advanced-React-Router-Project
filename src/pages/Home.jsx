import { Link, useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/users");

    // Other options
    // navigate(-1) → go back one step (like browser back button)
    // navigate(1) → go forward one step
    // navigate(-2) → go back two steps

    // Useful for login pages — you don't want the user pressing "back" and landing on the login screen again.
    // navigate("/users", { replace: true });

    // Passing State While Navigating
    // navigate("/profile", { state: { userId: 5, fromLogin: true } });
  }
  return (
    <div className="page-card">
      <h1>Welcome Home</h1>
      <p>This is the home page of the app.</p>
      <Link to="/users">View Users →</Link>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Home;
