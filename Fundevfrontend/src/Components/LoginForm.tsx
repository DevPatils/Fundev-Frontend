import React from "react";

export function LoginForm({ onClose }: { onClose: () => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login submitted");
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
      <p className="text-gray-600 text-sm mt-2">Log in with your username and password</p>

      <form className="my-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="login-identifier" className="block text-gray-700">
            Username or Email
          </label>
          <input
            id="login-identifier"
            placeholder="johndoe@example.com"
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-full"
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
          />
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