import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import aazadi from "../assets/azadi.jpg";
import amblum from "../assets/gog.jpeg";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

const BottomNavbar: React.FC = () => {
  const [formType, setFormType] = useState<"login" | "register" | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to check if user is logged in
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Assume token is stored in localStorage
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token on logout
    setIsLoggedIn(false);
    navigate("/"); // Navigate to home or login page after logout
  };

  const closeForm = () => setFormType(null);

  return (
    <div className="bottomnav">
      <div className="upperlogos flex flex-row">
        <div className="images-logo flex flex-row">
          <img src={amblum} alt="amblum" className="w-[15%] h-[100%]" />
          <div className="logo-text text-1xl">
            <h2 className="text-2xl font-bold">
              Department for promotion of industry and trade
            </h2>
            <h5 className="text-1xl">Ministry of commerce and industry</h5>
            <h2 className="text-2xl font-bold">Government of India</h2>
          </div>
          <img src={aazadi} alt="aazadi" className="w-[20%] h-[100%]" />
        </div>
        <div className="search-login flex flex-row gap-10 mr-10">
          <div className="search-login flex flex-row gap-10">
            <div className="search-bar flex justify-center items-center flex flex-row gap-5">
              <input
                type="text"
                placeholder="Search"
                className="w-60 p-2 rounded border border-gray-300"
              />
              <button className="bg-white text-blue-500 p-2 rounded hover:bg-blue-600 hover:text-white">
                Search
              </button>
            </div>
            <div className="login-bar flex justify-center items-center gap-5 mr-[15%]">
              {isLoggedIn ? (
                <>
                  <button
                    className="bg-white text-blue-500 p-2 rounded hover:bg-blue-600 hover:text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                  <button
                    className="bg-white text-blue-500 p-2 rounded hover:bg-blue-600 hover:text-white"
                    onClick={() => navigate("/profile")}
                  >
                    MyProfile
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-white text-blue-500 p-2 rounded hover:bg-blue-600 hover:text-white "
                    onClick={() => setFormType("login")}
                  >
                    Login
                  </button>
                  <button
                    className="bg-white text-blue-500 p-2 rounded hover:bg-blue-600 hover:text-white "
                    onClick={() => setFormType("register")}
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white border-t border-b p-4 flex justify-between items-center">
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
        <button className="flex-1 mx-2 py-2 bg-white text-blue-500 rounded hover:bg-blue-600 hover:text-white">
          Meetups
        </button>
      </div>

      {formType === "login" && <LoginForm onClose={closeForm} />}
      {formType === "register" && <RegisterForm onClose={closeForm} />}
    </div>
  );
};

export default BottomNavbar;
