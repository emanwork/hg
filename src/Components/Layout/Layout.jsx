import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Layout({ setRecipes }) {
  return (
    <>
      <NavBar setRecipes={setRecipes} />
      <Outlet />
      <Footer />
    </>
  );
}
