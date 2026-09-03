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
import Students, { studentLoader } from "./pages/Students";
import { USER_API } from "./pages/Students";

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
      // Way 1
      // { path: "/", element: <Home /> },

      // Way 2
      { index: true, element: <Home /> },
      { path: "/profile", element: <Profile /> },
      { path: "/users", element: <Users /> },
      { path: "/users/:userId", element: <UserDetail /> },
      {
        path: "/students",
        element: <Students />,
        loader: studentLoader,
      },
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
