import React, { useState } from "react";

export function LoginForm({ onClose }: { onClose: () => void }) {
  // State variables for form inputs
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the form submission
    
    console.log("Email:", email);
    console.log("Password:", password);
    // Here, you can send the data to the backend or perform other actions
  };

  return (
    <div className="relative max-w-md w-full mx-auto rounded-lg p-4 shadow-md bg-white">
      <button
        className="absolute top-2 right-2 text-gray-800"
        onClick={onClose}
      >
        ✖
      </button>
      <h2 className="font-bold text-xl text-gray-800">Register to Government Portal</h2>
      <p className="text-gray-600 text-sm mt-2">Sign up with your name, email, and password</p>

      <form className="my-4" onSubmit={handleSubmit}>


        <div className="mb-4">
          <label htmlFor="register-email" className="block text-gray-700">
            Email
          </label>
          <input
            id="register-email"
            placeholder="johndoe@example.com"
            type="email"
            className="border border-gray-300 rounded-lg p-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="register-password" className="block text-gray-700">
            Password
          </label>
          <input
            id="register-password"
            placeholder="••••••••"
            type="password"
            className="border border-gray-300 rounded-lg p-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-600 text-white rounded-md h-10 w-full font-medium"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}
