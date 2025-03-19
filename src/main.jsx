import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./commonent/Router/Router.jsx";
import AuthcontextApi from "./commonent/Authentication/AuthcontextApi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthcontextApi>
      <RouterProvider router={router} />
    </AuthcontextApi>
  </StrictMode>
);
