import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LoginForm({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loginType, setLoginType] = useState<'user' | 'investor'>('user');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const endpoint = loginType === 'user'
      ? 'https://fundev-backend.onrender.com/api/user/login'
      : 'https://fundev-backend.onrender.com/api/user/login-investor';

    try {
      const response = await axios.post(endpoint, {
        email,
        password,
      });

      if (response.status === 200) {
        setSuccess('Login successful!');
        localStorage.setItem('token', response.data.token);
        console.log('Logged in:', response.data);
        navigate("/Schemes");
      } else {
        setError(response.data.message || 'Login failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const toggleLoginType = () => {
    setLoginType(prevType => (prevType === 'user' ? 'investor' : 'user'));
    setSuccess('');
    setError('');
  };

  return (
    <div className="relative max-w-md w-full mx-auto rounded-lg p-4 shadow-md bg-white">
      <button
        className="absolute top-2 right-2 text-gray-800"
        onClick={onClose}
      >
        ✖
      </button>
      <h2 className="font-bold text-xl text-gray-800 mb-2">
        {loginType === 'user' ? 'Login as User' : 'Login as Investor'}
      </h2>
      <p className="text-gray-600 text-sm mb-4">
        {loginType === 'user' ? 'Log in with your email and password as a user' : 'Log in with your email and password as an investor'}
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="login-email" className="block text-gray-700 mb-1">
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
          <label htmlFor="login-password" className="block text-gray-700 mb-1">
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

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <div className="flex items-center mb-4">
          <span className="text-gray-700 mr-3">Login as {loginType === 'user' ? 'User' : 'Investor'}</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={loginType === 'investor'} onChange={toggleLoginType} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

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
