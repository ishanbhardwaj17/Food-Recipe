import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailData, setRecipeDetailData] = useState(null);

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
        setRecipeDetailData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
