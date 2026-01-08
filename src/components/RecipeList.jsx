import React from "react";
import { Link } from "react-router-dom";

const RecipeList = ({ item }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4">
      <div className="bg-slate-900 rounded-2xl shadow-lg overflow-hidden p-5">
        <div className="h-40 overflow-hidden rounded-xl">
          <img
            src={item.image_url}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        <span className="text-sm text-emerald-400 mt-2 block">
          {item.publisher}
        </span>

        <h3 className="text-slate-100 font-semibold truncate">
          {item.title}
        </h3>

        <Link
          to={`/recipe/${item.id}`}
          className="mt-4 inline-block bg-emerald-500 
                     text-slate-900 px-4 py-2 rounded-full text-sm"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeList;
