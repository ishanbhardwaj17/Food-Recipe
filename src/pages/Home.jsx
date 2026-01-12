import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/Context";
import RecipeList from "../components/RecipeList";

const Home = () => {
  const { recipeList, loading, fetchRandomRecipes } =
    useContext(GlobalContext);

  useEffect(() => {
    if (recipeList.length === 0) {
      fetchRandomRecipes();
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-200">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-slate-100 mb-8">
          Discover Recipes 🍽️
        </h2>

        <div className="flex flex-wrap -mx-4 gap-y-8">
          {recipeList.map((item) => (
            <RecipeList key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
