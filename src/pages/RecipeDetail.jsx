import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center">
      Recipe ID: {id}
    </div>
  );
};

export default RecipeDetail;
