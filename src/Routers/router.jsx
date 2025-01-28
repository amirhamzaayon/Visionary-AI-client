import { createBrowserRouter } from "react-router-dom";
import { HomePageLayout } from "../Layouts/HomePageLayout";
import { ForumDetailsPage } from "../Pages/ForumDetailsPage";
import { AuthLayout } from "../Layouts/AuthLayout";
import { Register } from "../Pages/Register";
import { LoginPage } from "../Pages/LoginPage";
import { NavbarNavigationLayout } from "../Layouts/NavbarNavigationLayout";
import { UserDashboardLayout } from "../Layouts/UserDashboardLayout";
import { AdminDashboardLayout } from "../Layouts/AdminDashboardLayout";
import { MyProfile } from "../Components/Dashboard - User/MyProfile";
import { MyPost } from "../Components/Dashboard - User/MyPost";
import { AddPost } from "../Components/Dashboard - User/AddPost";

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
    path: "/dashboard",
    element: <NavbarNavigationLayout />,
    children: [
      {
        path: "user",
        element: <UserDashboardLayout />,
        children: [
          {
            path: "userprofile",
            element: <MyProfile></MyProfile>,
          },
          {
            path: "userposts",
            element: <MyPost></MyPost>,
          },
          {
            path: "useraddpost",
            element: <AddPost></AddPost>,
          },
        ],
      },
      {
        path: "admin",
        element: <AdminDashboardLayout />,
        children: [
          {
            // path: "profile",
            // element: <AdminProfile />,
          },
          {
            // path: "posts",
            // element: <AdminPosts />,
          },
          {
            // path: "add-post",
            // element: <AddAdminPost />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
