import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.error("Login error: ", err);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 to-green-600 p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/30">
        <h2 className="text-3xl font-bold text-center text-white mb-6 drop-shadow">
         🧑‍🍳  Welcome Back to RecipeHub
        </h2>

        {error && (
          <p className="text-red-100 bg-red-500/30 p-2 rounded mb-4 text-sm text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition duration-300 text-white font-bold py-2 rounded-lg shadow-md"
          >
            🌿 Login
          </button>
        </form>

        <p className="mt-6 text-center text-white text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-yellow-200 hover:underline">
            Register now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
