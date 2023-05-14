import axios from "axios";
import { Toast } from "bootstrap";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Search({ setRecipes }) {
  let [apiError, setApiError] = useState();
  async function getRecipes(value) {
    let { data } = await axios
      .get(`https://forkify-api.herokuapp.com/api/search?q=${value.recipe}`)
      .catch((err) => {
        setApiError(err.response.data.error);
      });

    data.recipes ? setRecipes(data.recipes) : setRecipes({});

    console.log(data.recipes);
  }

  const formik = useFormik({
    initialValues: {
      recipe: "",
    },
    onSubmit: getRecipes,
  });

  return (
    <form class="d-flex" role="search" onSubmit={formik.handleSubmit}>
      <input
        id="recipe"
        name="recipe"
        value={formik.values.recipe}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">
        Search
      </button>
      {apiError ? (
        <div className="alert alert-danger">
          {apiError}{" "}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : (
        ""
      )}
    </form>
  );
}
