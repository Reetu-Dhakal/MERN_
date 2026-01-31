import React from 'react';

const RegisterForm = () => {
  return (
    <div className="mt-5 shadow-lg rounded-md p-6 border border-gray-100 bg-white max-w-md mx-auto">
      <form className="flex flex-col gap-3">
        {/* First Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700" htmlFor="firstName">
            First Name
          </label>
          <input
            className="border border-green-500 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            id="firstName"
            type="text"
            placeholder="John"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="border border-green-500 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            id="lastName"
            type="text"
            placeholder="Deo"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="border border-green-500 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            id="email"
            type="email"
            placeholder="Enter email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            className="border border-green-500 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            id="password"
            type="password"
            placeholder="Enter password"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700" htmlFor="c_password">
            Re-type Password
          </label>
          <input
            className="border border-green-500 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            id="c_password"
            type="password"
            placeholder="Re-enter Password"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="w-full">
          <button
            className="w-full bg-green-600 py-2 text-white font-semibold rounded-md hover:bg-green-700 transition-colors"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
