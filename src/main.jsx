import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
