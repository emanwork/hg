import React, { useEffect, useState } from "react";
import "./Recipes.css";

export default function Recipes({ recipes }) {
  return (
    <>
      <section id="recipes">
        <div className="container">
          <div className="row">
            {recipes.map((recipe) => (
              <div className="col-md-3" key={recipe.recipe_id}>
                <div className="recipe">
                  <div className="image">
                    <img className="img-fluid" src={recipe.image_url} alt="" />
                  </div>
                  <h3 className="title">{recipe.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
