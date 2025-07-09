import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await register(username, email, password);
      navigate("/");
    } catch (err) {
      console.error("Register error:", err);
      setError("Registration failed. Please check your inputs.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 to-green-600 p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-white/30">
        <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow">
          🍛 Create your RecipeHub account
        </h2>

        {error && (
          <p className="bg-red-500/30 text-red-100 px-4 py-2 rounded mb-4 text-center text-sm">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
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
           🍲 Register
          </button>
        </form>

        <p className="mt-6 text-center text-white text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-200 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
