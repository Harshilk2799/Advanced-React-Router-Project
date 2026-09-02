import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import UserDetail from "./pages/UserDetail";

// Way 2
// const appRoutesDefination = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/profile" element={<Profile />} />
//   </Route>
// );

// const appRouter = createBrowserRouter(appRoutesDefination);

// Way 1
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
      { path: "/users", element: <Users /> },
      { path: "/users/:userId", element: <UserDetail /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
