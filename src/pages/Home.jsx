import { Link } from "react-router";

function Home() {
  return (
    <div className="page-card">
      <h1>Welcome Home</h1>
      <p>This is the home page of the app.</p>
      <Link to="/users">View Users →</Link>
    </div>
  );
}

export default Home;
