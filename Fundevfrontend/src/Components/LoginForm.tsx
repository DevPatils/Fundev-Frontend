import React, { useState } from "react";
import axios from "axios"; // Import Axios

export function LoginForm({ onClose }: { onClose: () => void }) {
  // State variables for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loginType, setLoginType] = useState<'user' | 'investor'>('user'); // State to track login type

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
        // Handle success (e.g., display a message or save the token)
        setSuccess('Login successful!');
        localStorage.setItem('token', response.data.token);  // Save the token to localStorage
        console.log('Logged in:', response.data);
      } else {
        // Handle error (e.g., display a message)
        setError(response.data.message || 'Login failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleLoginTypeChange = (type: 'user' | 'investor') => {
    setLoginType(type);
    setSuccess(''); // Clear success message when switching login type
    setError('');   // Clear error message when switching login type
  };

  return (
    <div className="relative max-w-md w-full mx-auto rounded-lg p-4 shadow-md bg-white">
      <button
        className="absolute top-2 right-2 text-gray-800"
        onClick={onClose}
      >
        ✖
      </button>
      <h2 className="font-bold text-xl text-gray-800">
        {loginType === 'user' ? 'Login as User' : 'Login as Investor'}
      </h2>
      <p className="text-gray-600 text-sm mt-2">
        {loginType === 'user' ? 'Log in with your email and password as a user' : 'Log in with your email and password as an investor'}
      </p>

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

        <div className="flex gap-4 mb-4">
          <button
            className="bg-blue-600 text-white rounded-md h-10 w-full font-medium"
            type="button"
            onClick={() => handleLoginTypeChange('user')}
          >
            Log In as User
          </button>
          <button
            className="bg-green-600 text-white rounded-md h-10 w-full font-medium"
            type="button"
            onClick={() => handleLoginTypeChange('investor')}
          >
            Log In as Investor
          </button>
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
