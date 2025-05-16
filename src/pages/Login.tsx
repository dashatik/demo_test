import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "dewa") {
      localStorage.setItem("loggedIn", "true");
      navigate("/");
    } else {
      setError("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] font-[Inter]">
      <div className="bg-white p-8 rounded shadow-md w-[340px] space-y-4 border border-[#E0E0E0]">
        <h2 className="text-[20px] font-semibold text-center">Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full border px-3 py-2 rounded text-[14px]"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 rounded text-[14px]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button
          onClick={handleLogin}
          className="w-full bg-[#4CAF50] text-white py-2 rounded hover:bg-[#43A047] text-[14px] font-medium"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
