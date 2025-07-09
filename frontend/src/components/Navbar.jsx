import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="backdrop-blur-md bg-white/30 border-b border-white/20 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-3xl font-extrabold text-green-600 tracking-tight flex items-center gap-2">
          <span className="bg-green-600 text-white rounded-full p-2">🍲</span>
          <span className="hover:text-green-800 transition">RecipeHub</span>
        </Link>

        <div className="hidden md:flex gap-4 items-center">
          {user ? (
            <>
              <Link to="/add-recipe">
                <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition">
                  ➕ Add Recipe
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-100 text-red-600 px-4 py-2 rounded-full shadow hover:bg-red-200 transition"
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition">
                  🔐 Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition">
                  📝 Register
                </button>
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white/80 backdrop-blur-sm">
          {user ? (
            <>
              <Link to="/add-recipe">
                <button className="w-full text-left bg-green-400 text-green-800 px-4 py-2 rounded-md">
                  ➕ Add Recipe
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left bg-green-400 text-red-500 px-4 py-2 rounded-md"
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="w-full text-left bg-green-400 text-purple-800 px-4 py-2 rounded-md">
                  🔐 Login
                </button>
              </Link>
              <Link to="/register">
                <button className="w-full text-left bg-green-400 text-pink-800 px-4 py-2 rounded-md">
                  📝 Register
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
