import { createBrowserRouter } from "react-router-dom";
import LogsPage from "../pages/logs/Logs.page";
import MainPage from "../pages/Main.page";
import UsersPage from "../pages/user/Users.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/logs",
        element: <LogsPage />,
      },
    ],
  },
]);

export default router;
