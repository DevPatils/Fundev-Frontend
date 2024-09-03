import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import aazadi from "../assets/azaidbg.jpeg";
import amblum from "../assets/gogbg.jpeg";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

const BottomNavbar: React.FC = () => {
  const [formType, setFormType] = useState<"login" | "register" | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown
  const navigate = useNavigate();

  const userType = localStorage.getItem("userType");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/"); // Navigate to home or login page after logout
  };

  const closeForm = () => setFormType(null);

  return (
    <div className="bottomnav">
      <div className="upperlogos bg-white flex items-center h-[30%] justify-between">
        {/* Left-aligned amblum image */}
        <img src={amblum} alt="amblum" className="w-[9%] h-[15%] object-contain" />

        {/* Centered aazadi image */}
        <img src={aazadi} alt="aazadi" className="w-[12%] h-[15%] object-contain mx-auto" />

        {/* Right-aligned login/register buttons */}
        <div className="flex flex-row gap-4 pr-7 items-center">
          <div className="login-bar flex items-center gap-4">
            {isLoggedIn ? (
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className="bg-white text-blue-500 p-2 rounded hover:bg-blue-600 hover:text-white"
                  onClick={() => navigate("/myProfile")}
                >
                  My Profile
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                    <button
                      className="block w-full text-left p-2 hover:bg-blue-100"
                      onClick={() => navigate("/my-startup")}
                    >
                      My Startup
                    </button>
                    <button
                      className="block w-full text-left p-2 hover:bg-blue-100"
                      onClick={() => navigate("/my-investment")}
                    >
                      My Investment
                    </button>
                    <button
                      className="block w-full text-left p-2 hover:bg-blue-100"
                      onClick={() => navigate("/patent-status")}
                    >
                      Patent Status
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  className="bg-white text-blue-500 p-2 rounded hover:bg-blue-600 hover:text-white"
                  onClick={() => setFormType("login")}
                >
                  Login
                </button>
                <button
                  className="bg-white text-blue-500 p-2 rounded hover:bg-blue-600 hover:text-white"
                  onClick={() => setFormType("register")}
                >
                  Register
                </button>
              </>
            )}
            {isLoggedIn && (
              <button
                className="bg-white text-blue-500 p-2 rounded hover:bg-blue-600 hover:text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="w-full bg-white border-t border-b p-4 flex justify-end items-center">
        <button
          className="flex-1 mx-2 py-2 bg-white text-blue-500 rounded hover:bg-blue-600 hover:text-white"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="flex-1 mx-2 py-2 bg-white text-blue-500 rounded hover:bg-blue-600 hover:text-white"
          onClick={() => navigate("/funding")}
        >
          Funding
        </button>
        <button
          className="flex-1 mx-2 py-2 bg-white text-blue-500 rounded hover:bg-blue-600 hover:text-white"
          onClick={() => navigate("/patents")}
        >
          Patent Application
        </button>
        <button
          className="flex-1 mx-2 py-2 bg-white text-blue-500 rounded hover:bg-blue-600 hover:text-white"
          onClick={() => navigate("/schemes")}
        >
          Schemes
        </button>
        {userType === "user" ? null : (
          <button
            className="flex-1 mx-2 py-2 bg-white text-blue-500 rounded hover:bg-blue-600 hover:text-white"
            onClick={() => navigate("/invest")}
          >
            Investment
          </button>
        )}
      </div>

      {formType === "login" && <LoginForm onClose={closeForm} />}
      {formType === "register" && <RegisterForm onClose={closeForm} />}
    </div>
  );
};

export default BottomNavbar;