import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayout from "./MainLayout.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/Home";
import ErrorPage from "./pages/errorPage/ErrorPage";
import About from "./pages/about/About";

import AOS from "aos";
import "aos/dist/aos.css";
import Hiring from "./pages/hiring/Hiring";
import Registration from "./pages/registation/Registration";
import Login from "./pages/login/Login";
import SP from "./pages/schedule/SP";
import Details from "./pages/home/Details";
import AuthProvider from "./components/authprovider/AuthProvider";
import PrivateRoute from "./components/privateroute/PrivateRoute";

AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/schedule_&_price",
        element: (
          <PrivateRoute>
            <SP></SP>
          </PrivateRoute>
        ),
      },
      {
        path: "/servicesDetails/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/hiring",
        element: (
          <PrivateRoute>
            <Hiring></Hiring>
          </PrivateRoute>
        ),
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <MainLayout></MainLayout>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
