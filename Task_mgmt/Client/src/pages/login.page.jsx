import React from 'react'
// import Registerform from '../components/forms/register.forms.jsx' 
import Loginform from '../components/forms/login.forms.jsx'
import { Link   } from 'react-router'
// ? rafce

const LoginPage = () => {
  return (
    <main className='min-h-screen w-full flex justify-center items-center bg-gray-50'>
      <div className='w-full max-w-md border border-gray-200 bg-white py-8 px-8 rounded-2xl shadow-sm'>
        <h1 className='text-3xl font-bold text-left text-gray-900'>Login</h1>
        <p className='mt-1 text-left text-base text-gray-500'>Login to access your task</p>
            <Loginform/>
            {/* div */}
            
        <div className='mt-4'>
          <p className='text-left text-sm text-gray-600'>No account yet? <Link to={'/register'}><span className='text-red-800 font-semibold'>Create Account</span></Link></p>
            </div>
        </div>

    </main>
    // <div>register.base</div>
  )
}

export default LoginPage