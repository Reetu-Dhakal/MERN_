import { useState } from 'react'
import { useNavigate } from 'react-router'
import { register } from '../../api/auth.api';
import toast from 'react-hot-toast';

const Registerform = () => {
    const navigate = useNavigate();
    const [formData, setFormData]= useState({
        first_name:"",
        last_name:"",
        email: "",
        password:"",
        re_password:""
    });
    const onchange =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setFormData({
            ...formData,
            [name]:value
        })
    } 

    //submit form
    const onSubmit = async(e)=>{
        e.preventDefault();
        try{
            // Check if passwords match
            if(formData.password !== formData.re_password){
                toast.error("Passwords do not match");
                return;
            }

            const {re_password: _re_password, ...rest}=formData;
            const response = await register(rest);
            
            if(response && response.data){
                console.log("Registration successful:", response);
                toast.success("Registration successful! Please login.");
                navigate('/login');
            }
        }catch(error){
            toast.error(error.message || "Something went wrong")
            console.log("Registration error:", error)
        }
    }

    return(
        <div className='mt-8'>
            <form className='flex flex-col gap-3' onSubmit={onSubmit}>
                    {/* gird */}
                    <div className='flex flex-col gap-2'>
                        {/* label */}
                        <label className='text-base font-semibold text-gray-800'htmlFor='first_name'>First Name</label>
                        {/* input */}
                        <input 
                        onChange={onchange}
                        name="first_name"
                        className='border border-gray-300 px-3 py-2.5 rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500' id='first_name' type='text' placeholder='First Name' required value={formData.first_name}/>
                    </div>
                    {/* last name */}
                    <div className='flex flex-col gap-2'>
                        {/* label */}
                        <label className='text-base font-semibold text-gray-800' htmlFor="last_name">Last Name</label>
                        {/* input */}
                        <input 
                        onChange={onchange}
                        name="last_name"
                        className='border border-gray-300 px-3 py-2.5 rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500' id="last_name" type='text' placeholder='Last Name' required value={formData.last_name}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        {/* label */}
                        <label className='text-base font-semibold text-gray-800' htmlFor="email">Email</label>
                        {/* input */}
                        <input 
                        onChange={onchange}
                        name="email"
                        className='border border-gray-300 px-3 py-2.5 rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500' id="email" type='email' placeholder='Email' required value={formData.email}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        {/* label */}
                        <label className='text-base font-semibold text-gray-800' htmlFor="password">Password</label>
                        {/* input */}
                        <input 
                        onChange={onchange}
                        name="password"
                        className='border border-gray-300 px-3 py-2.5 rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500' id="password" type='password' placeholder='Password' required value={formData.password}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        {/* label */}
                        <label className='text-base font-semibold text-gray-800' htmlFor="re-password">Confirm Password</label>
                        {/* input */}
                        <input 
                        onChange={onchange}
                        name="re_password"
                        className='border border-gray-300 px-3 py-2.5 rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500' id="re-password" type='password' placeholder='Retype password' required value={formData.re_password}/>
                    </div>
                    <div className='w-full mt-2'>
                        <button 
                        style={{ backgroundColor: '#2563eb' }}
                        className='w-full hover:bg-blue-700 py-3.5 text-base text-white font-semibold rounded-md cursor-pointer transition-colors' type='submit'>Create Account</button>
                    </div>
                </form>
            </div>
    )
    
}
export default Registerform
