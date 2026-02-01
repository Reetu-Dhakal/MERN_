import React from 'react'
import Registerform from '../components/forms/register.forms.jsx' 
import { Link } from 'react-router'
// ? rafce

const RegisterPage = () => {
  return (
    <main className='min-h-screen w-full flex justify-center items-center tracking-wider'>
        <div className='border border-red-600 py-5 px-6 min-h-140 min-w-100 rounded-2xl shadow-2xl' >
            <h1 className='text-3xl font-extrabold text-center'>Create Account</h1>
            <p className='mt-2 text-center text-[14px]'>To create an account fill the following</p>
            <Registerform/>
            {/* div */}
            
            <div className='mt-1'>
                <p className='text-center'>Already have an account ? <Link to='/login'><span className='text-blue-600 italic font-semibold'>login</span></Link></p>
            </div>
        </div>

    </main>
    // <div>register.base</div>
  )
}

export default RegisterPage