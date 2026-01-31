import React from 'react';
import { Link } from 'react-router';
import LoginForm from "../component/forms/login.form.jsx";

const LoginPage = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      <div className="shadow-2xl border border-green-600 p-8 w-full max-w-md rounded-lg bg-white">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Login to access your tasks
        </p>

        {/* Form */}
        <div className="mt-6">
          <LoginForm />
        </div>

        {/* Link to Register */}
        <div className="mt-4 text-center text-sm text-gray-700">
          Don't have an account?{" "}
          <Link to="/register">
            <span className="text-green-700 italic font-semibold">Register</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
