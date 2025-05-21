import { useState } from "react";
import { useNavigate } from "react-router-dom";
import transtarLogo from "../assets/Transtar_Logo-04.png";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "user" && password === "dewa") {
      localStorage.setItem("loggedIn", "true");
      navigate("/");
    } else {
      setError("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex text-[#212121] bg-gradient-to-r from-[#84b1f6] to-[#ecc2e6]">
      {/* Left panel (logo) */}
    <div className="w-1/2 flex flex-col justify-center items-center px-[32px] py-[48px] px-[100px] ">
        <img
        src={transtarLogo}
        alt="Transtar Logo"
        className="h-[70px] mb-[24px]"
        />
    </div>

      {/* Right panel (form) */}
      <div className="w-1/2 flex justify-center items-center px-[100px]">
        <div className="w-full max-w-[360px] px-[16px]">
          {/* Heading */}
          <div className=" flex justify-between items-center mb-[8px] ">
            <h1 className="text-[20px] font-light">Log in to Transtar ZKN</h1>
            <span className="text-[12px] text-[#444]">🇪🇺 EU1 - Europe</span>
          </div>
          <div className="w-full max-w-[360px]">
          {/* Inputs */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full bg-[#fff] px-[12px] text-black py-[10px] rounded-[4px] mb-[12px] text-[14px] border-none focus:outline-none focus:ring-[2px] focus:ring-[#84b1f6]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full bg-[#fff] text-black px-[12px] py-[10px] rounded-[4px] mb-[12px] text-[14px] border-none focus:outline-none focus:ring-[2px] focus:ring-[#84b1f6]"
          />
          {/* Error */}
          {error && <div className="text-[#F44336] text-[13px] mb-[8px]">{error}</div>}

          {/* Login button */}
          <button
            onClick={handleLogin}
            className="block cursor-pointer items-center w-[383px] px-[12px] bg-[#84b1f6] hover:bg-[#3f76d1] text-[14px] py-[10px] rounded-[4px] mb-[12px] border-none"
          >
            Log in
          </button>
          {/* Signup / Setup Environment */}
            <button
            onClick={() => {
                localStorage.setItem("loggedIn", "true");
                localStorage.removeItem("onboarded");
                navigate("/provision");
            }}
            className="block cursor-pointer items-center bg-transparent  hover:text-[#666] text-white text-[14px] py-[10px] rounded-[4px] underline border-none"
            >
            Register Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
