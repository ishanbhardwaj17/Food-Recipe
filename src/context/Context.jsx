import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailData, setRecipeDetailData] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!searchParam.trim()) return;

    try {
      setLoading(true);

      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();

      setRecipeList(data?.data?.recipes || []);
      navigate('/')
    } catch (error) {
      console.error(error);
      setRecipeList([]);
    } finally {
      setLoading(false);
    }
  }

  function handleAddToFavorites(currItem) {
    console.log(currItem);
    let cpyfavoriteList = [...favoriteList];
    const idx = cpyfavoriteList.findIndex((item) => item.id === currItem.id);

    if (idx == -1) {
      cpyfavoriteList.push(currItem);
    }
    else {
      cpyfavoriteList.splice(idx);
    }

    setFavoriteList(cpyfavoriteList);

    console.log(favoriteList)

  }

  async function fetchRandomRecipes() {
    const keywords = ["pizza", "pasta", "chicken", "salad", "burger"];
    const randomKeyword =
      keywords[Math.floor(Math.random() * keywords.length)];

    try {
      setLoading(true);

      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${randomKeyword}`
      );
      const data = await res.json();

      setRecipeList(data?.data?.recipes || []);
    } catch (error) {
      console.error(error);
      setRecipeList([]);
    } finally {
      setLoading(false);
    }
  }


  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        recipeList,
        loading,
        recipeDetailData,
        setRecipeDetailData,
        handleAddToFavorites,
        favoriteList,
        fetchRandomRecipes
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
