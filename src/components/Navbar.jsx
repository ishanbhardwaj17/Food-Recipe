import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/Context";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="bg-slate-900 text-slate-100 px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 flex-wrap">
        <h2 className="text-2xl font-bold text-emerald-400">
          Food Recipe
        </h2>

        <form onSubmit={handleSubmit} className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-slate-800 
                       text-slate-100 placeholder-slate-400
                       focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </form>

        <ul className="flex gap-6">
          <NavLink to="/" className="hover:text-emerald-400">
            Home
          </NavLink>
          <NavLink to="/favorites" className="hover:text-emerald-400">
            Favorites
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
