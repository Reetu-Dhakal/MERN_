import React from 'react'

const Registerform = () => {
    return(
        <div className='mt-10'>
                <form className='flex flex-col gap-1'>
                    {/* gird */}
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[16px] font-semibold'htmlFor='first_name'>First Name: </label>
                        {/* input */}
                        <input className='border border-gray-400 px-2 py-1.5 rounded-md focus:outline-blue-400' id='first_name' type='text' placeholder='First Name' required/>
                    </div>
                    {/* last name */}
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[16px] font-semibold' htmlFor="last_name">Last Name: </label>
                        {/* input */}
                        <input className='border border-gray-400 px-2 py-1.5 rounded-md focus:outline-blue-400' id="last_name" type='text' placeholder='Last Name' required />
                    </div>
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[16px] font-semibold' htmlFor="email">Email: </label>
                        {/* input */}
                        <input className='border border-gray-400 px-2 py-1.5 rounded-md focus:outline-blue-400' id="email" type='email' placeholder='Email' required />
                    </div>
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[16px] font-semibold' htmlFor="password">Password: </label>
                        {/* input */}
                        <input className='border border-gray-400 px-2 py-1.5 rounded-md focus:outline-blue-400' id="password" type='password' placeholder='password' required />
                    </div>
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[16px] font-semibold' htmlFor="re-password">Password: </label>
                        {/* input */}
                        <input className='border border-gray-400 px-2 py-1.5 rounded-md focus:outline-blue-400' id="re-password" type='password' placeholder='retype Passwor' required />
                    </div>
                    <div className='w-full'>
                        <button className='w-full bg-blue-600 py-3.5 text-white font-bold rounded-md cursor-pointer' type='submit'>Create Account</button>
                    </div>
                </form>
            </div>
    )
    
}
export default Registerform
