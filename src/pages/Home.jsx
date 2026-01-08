import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";
import RecipeList from "../components/RecipeList";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

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
        {recipeList.length > 0 ? (
          <div className="flex flex-wrap -mx-4 gap-y-8">
            {recipeList.map((item) => (
              <RecipeList key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-400">
            Search for a recipe 🍔
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
