import React from 'react'

const Registerform = () => {
    return(
        <div className='mt-8'>
            <form className='flex flex-col gap-5'>
                    {/* gird */}
                    <div className='flex flex-col gap-2'>
                        {/* label */}
                        <label className='text-base font-semibold text-gray-800'htmlFor='first_name'>First Name</label>
                        {/* input */}
                        <input className='border border-gray-300 px-3 py-3 rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500' id='first_name' type='text' placeholder='First Name' required/>
                    </div>
                    {/* last name */}
                    <div className='flex flex-col gap-2'>
                        {/* label */}
                        <label className='text-base font-semibold text-gray-800' htmlFor="last_name">Last Name</label>
                        {/* input */}
                        <input className='border border-gray-300 px-3 py-3 rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500' id="last_name" type='text' placeholder='Last Name' required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        {/* label */}
                        <label className='text-base font-semibold text-gray-800' htmlFor="email">Email</label>
                        {/* input */}
                        <input className='border border-gray-300 px-3 py-3 rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500' id="email" type='email' placeholder='Email' required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        {/* label */}
                        <label className='text-base font-semibold text-gray-800' htmlFor="password">Password</label>
                        {/* input */}
                        <input className='border border-gray-300 px-3 py-3 rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500' id="password" type='password' placeholder='Password' required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        {/* label */}
                        <label className='text-base font-semibold text-gray-800' htmlFor="re-password">Confirm Password</label>
                        {/* input */}
                        <input className='border border-gray-300 px-3 py-3 rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500' id="re-password" type='password' placeholder='Retype password' required />
                    </div>
                    <div className='w-full mt-2'>
                        <button className='w-full bg-red-800 hover:bg-red-900 py-3.5 text-base text-white font-semibold rounded-md cursor-pointer transition-colors' type='submit'>Create Account</button>
                    </div>
                </form>
            </div>
    )
    
}
export default Registerform
