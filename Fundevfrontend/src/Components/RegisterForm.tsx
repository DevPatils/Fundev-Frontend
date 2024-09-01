import React from "react";

export function RegisterForm({ onClose }: { onClose: () => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signup submitted");
  };

  return (
    <div className="relative max-w-md w-full mx-auto rounded-lg p-4 shadow-md bg-white">
      <button
        className="absolute top-2 right-2 text-gray-800"
        onClick={onClose}
      >
        ✖
      </button>
      <h2 className="font-bold text-xl text-gray-800">Welcome to Government Portal</h2>
      <p className="text-gray-600 text-sm mt-2">Sign up to create a new account</p>

      <form className="my-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              id="name"
              placeholder="John Doe"
              type="text"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="gender" className="block text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              className="border border-gray-300 rounded-lg p-2 w-full"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username
          </label>
          <input
            id="username"
            placeholder="johndoe"
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            id="password"
            placeholder="••••••••"
            type="password"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>

        <div className="flex flex-col gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="email" className="block text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              placeholder="johndoe@example.com"
              type="email"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="age" className="block text-gray-700">
              Age
            </label>
            <input
              id="age"
              placeholder="30"
              type="number"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="phone" className="block text-gray-700">
              Phone Number
            </label>
            <input
              id="phone"
              placeholder="+1 234 567 890"
              type="tel"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="city" className="block text-gray-700">
              City
            </label>
            <input
              id="city"
              placeholder="New York"
              type="text"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
        </div>

        <button
          className="bg-blue-600 text-white rounded-md h-10 w-full font-medium"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
