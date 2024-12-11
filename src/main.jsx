import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./components/providers/AuthProvider";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:"/orders",
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
       },
       {
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
       },
       {
        path: "/dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
       }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
