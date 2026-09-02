import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <div className="page-card" style={{ textAlign: "center" }}>
          <h1>404 — Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
