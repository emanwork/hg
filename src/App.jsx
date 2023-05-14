import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

export default function App() {
  let [recipes, setRecipes] = useState([]);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout setRecipes={setRecipes} />,
      children: [
        { index: true, element: <Home recipes={recipes} /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </>
  );
}
