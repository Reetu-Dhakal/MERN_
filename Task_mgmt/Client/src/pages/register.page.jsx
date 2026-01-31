import React from 'react'
import { Link } from 'react-router'
import RegisterForm from '../component/forms/register.form.jsx'

const RegisterPage = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="shadow-2xl border border-green-600 p-8 w-full max-w-md rounded-lg bg-white">
        <h1 className="text-3xl font-bold text-center">Create Account</h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          To create account fill the form below
        </p>
        {/* Form */}
        <div className="mt-6">
          <RegisterForm />
        </div>
        {/* Link to Login page */}
        <div className="mt-4 text-center text-sm text-gray-700">
          <p className="text-sm text-gray-700">
            Already Have an account?{" "}
            <Link to="/login">
              <span className="text-green-700 italic font-semibold">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default RegisterPage
