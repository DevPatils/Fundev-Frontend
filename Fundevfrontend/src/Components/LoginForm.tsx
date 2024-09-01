import React, { useState } from "react";
import axios from "axios"; // Import Axios

export function LoginForm({ onClose }: { onClose: () => void }) {
  // State variables for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://fundev-backend.onrender.com/api/user/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Handle success (e.g., display a message or save the token)
        setSuccess('Login successful!');
        localStorage.setItem('token', response.data.token);  // Save the token to localStorage
        console.log('User logged in:', response.data);
      } else {
        // Handle error (e.g., display a message)
        setError(response.data.message || 'Login failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="relative max-w-md w-full mx-auto rounded-lg p-4 shadow-md bg-white">
      <button
        className="absolute top-2 right-2 text-gray-800"
        onClick={onClose}
      >
        ✖
      </button>
      <h2 className="font-bold text-xl text-gray-800">Login to Government Portal</h2>
      <p className="text-gray-600 text-sm mt-2">Log in with your email and password</p>

      <form className="my-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="login-email" className="block text-gray-700">
            Email
          </label>
          <input
            id="login-email"
            placeholder="johndoe@example.com"
            type="email"
            className="border border-gray-300 rounded-lg p-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="login-password" className="block text-gray-700">
            Password
          </label>
          <input
            id="login-password"
            placeholder="••••••••"
            type="password"
            className="border border-gray-300 rounded-lg p-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <button
          className="bg-blue-600 text-white rounded-md h-10 w-full font-medium"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
