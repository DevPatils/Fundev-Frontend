import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import aazadi from '../assets/azadi.jpg';
import amblum from '../assets/gog.jpeg';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

const BottomNavbar: React.FC = () => {
    const [formType, setFormType] = useState<"login" | "register" | null>(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const closeForm = () => setFormType(null);

    return (
        <div className="bottomnav">
            <div className="upperlogos flex flex-row">
                <div className="images-logo flex flex-row">
                    <img src={amblum} alt="amblum" className="w-[15%] h-[100%]" />
                    <div className="logo-text text-1xl">
                        <h2 className="text-2xl font-bold">Department for promotion of industry and trade</h2>
                        <h5 className='text-1xl'>Ministry of commerce and industry</h5>
                        <h2 className="text-2xl font-bold">Government of India</h2>
                    </div>
                    <img src={aazadi} alt="aazadi" className="w-[20%] h-[100%]" />
                </div>
                <div className="search-login flex flex-row gap-10 mr-10">
                    <div className="search-login flex flex-row gap-10">
                        <div className="search-bar flex justify-center items-center flex flex-row gap-5">
                            <input type="text" placeholder="Search" className="w-60 p-2 rounded border border-gray-300" />
                            <button className="bg-white text-blue-500 p-2 rounded hover:bg-blue-600">Search</button>
                        </div>
                        <div className="login-bar flex justify-center items-center gap-5 mr-[15%]">
                            <button 
                                className="bg-white text-blue-500 p-2 rounded hover:bg-blue-600 " 
                                onClick={() => setFormType("login")}
                            >
                                Login
                            </button>
                            <button 
                                className="bg-white text-blue-500 p-2 rounded hover:bg-blue-600 " 
                                onClick={() => setFormType("register")}
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white border-t border-b p-4 flex justify-between items-center">
                <button 
                    className="flex-1 mx-2 py-2 bg-white text-blue-500 rounded hover:bg-blue-600"
                    onClick={() => navigate('/')}  // Navigate to the home route on click
                >
                    Home
                </button>
                <button 
                    className="flex-1 mx-2 py-2 bg-white text-blue-500 rounded hover:bg-blue-600"
                    onClick={() => navigate('/funding')}  // Navigate to the home route on click
                >
                    Register Startup
                </button>
                <button className="flex-1 mx-2 py-2 bg-white text-blue-500 rounded hover:bg-blue-600">Patent Application</button>
                <button className="flex-1 mx-2 py-2 bg-white text-blue-500 rounded hover:bg-blue-600">Schemes</button>
                <button className="flex-1 mx-2 py-2 bg-white text-blue-500 rounded hover:bg-blue-600">Meetups</button>
            </div>

            {formType === "login" && <LoginForm onClose={closeForm} />}
            {formType === "register" && <RegisterForm onClose={closeForm} />}
        </div>
    );
};

export default BottomNavbar;
