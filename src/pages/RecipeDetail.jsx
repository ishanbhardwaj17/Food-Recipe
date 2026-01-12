import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/Context";

const RecipeDetail = () => {
  const { id } = useParams();

  const {
    recipeDetailData,
    setRecipeDetailData,
    favoriteList,
    handleAddToFavorites
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await res.json();
        setRecipeDetailData(data.data.recipe);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    }

    getRecipeDetails();
  }, [id]);

  if (!recipeDetailData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-300">
        Loading...
      </div>
    );
  }

  const isFavorite =
    favoriteList.findIndex(
      (item) => item.id === recipeDetailData.id
    ) !== -1;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">

        {/* IMAGE */}
        <div className="row-start-2 lg:row-start-auto">
          <div className="h-96 overflow-hidden rounded-2xl group shadow-lg">
            <img
              src={recipeDetailData.image_url}
              alt={recipeDetailData.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-4">
          <span className="text-sm text-emerald-400 font-medium">
            {recipeDetailData.publisher}
          </span>

          <h3 className="font-bold text-3xl text-slate-100">
            {recipeDetailData.title}
          </h3>

          {/* FAVORITE BUTTON */}
          <button
            onClick={() => handleAddToFavorites(recipeDetailData)}
            className={`mt-3 w-fit px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium shadow-md transition
              ${isFavorite
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-emerald-500 text-slate-900 hover:bg-emerald-400"
              }`}
          >
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
          </button>

          {/* INGREDIENTS */}
          <div className="mt-6">
            <span className="text-xl font-semibold text-slate-100">
              Ingredients
            </span>

            <ul className="mt-4 flex flex-col gap-3">
              {recipeDetailData.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="bg-slate-900 rounded-lg p-3 flex gap-2 text-slate-300"
                >
                  <span className="font-semibold text-emerald-400">
                    {ingredient.quantity || ""} {ingredient.unit}
                  </span>
                  <span>{ingredient.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RecipeDetail;
