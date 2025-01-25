import { createBrowserRouter } from "react-router-dom";
import { HomePageLayout } from "../Layouts/HomePageLayout";
import { ForumDetailsPage } from "../Pages/ForumDetailsPage";
import { AuthLayout } from "../Layouts/AuthLayout";
import { Register } from "../Pages/Register";
import { LoginPage } from "../Pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout></HomePageLayout>,
    children: [
      {
        path: "",
        element: <ForumDetailsPage></ForumDetailsPage>,
        // loader: fetch()
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/forumdetails",
    element: <ForumDetailsPage></ForumDetailsPage>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
