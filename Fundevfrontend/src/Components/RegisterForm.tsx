import React, { useState } from "react";

export function RegisterForm({ onClose }: { onClose: () => void }) {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fundev-backend.onrender.com/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle success (e.g., display a message or save the token)
        setSuccess('Registration successful!');
        localStorage.setItem('token', data.token);  // Save the token to localStorage
        console.log('User registered:', data);
      } else {
        // Handle error (e.g., display a message)
        setError(data.message || 'Registration failed.');
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
      <h2 className="font-bold text-xl text-gray-800">Register to Government Portal</h2>
      <p className="text-gray-600 text-sm mt-2">Sign up with your name, email, and password</p>

      <form className="my-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="register-name" className="block text-gray-700">
            Name
          </label>
          <input
            id="register-name"
            placeholder="John Doe"
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

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

export default RegisterForm;
