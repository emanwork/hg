import React from "react";
import Header from "../Header/Header";
import Recipes from "../Recipes/Recipes";

export default function Home({ recipes }) {
  return (
    <>
      <Recipes recipes={recipes} />
    </>
  );
}
