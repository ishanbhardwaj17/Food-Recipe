import { useContext } from "react";
import { GlobalContext } from "../context/Context";
import RecipeList from "../components/RecipeList";

const Favorites = () => {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-12">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold mb-8 text-slate-100">
          Favorite Recipes
        </h2>

        {favoriteList && favoriteList.length > 0 ? (
          <div className="flex flex-wrap -mx-4 gap-y-8">
            {favoriteList.map((item) => (
              <RecipeList key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-400 mt-20">
            <p className="text-lg">Nothing is added to favorites yet 🍽️</p>
            <p className="text-sm mt-2">
              Browse recipes and save your favorites.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Favorites;
