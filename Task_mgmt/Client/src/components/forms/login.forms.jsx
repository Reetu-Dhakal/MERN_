// import React, { useState } from 'react'

// const Loginform = () => {

//     // const [email,setEmail] = useState('email'); //email
//     // const [password,setPassword] = useState("password")

//     const[formData,setformData] = useState({
//         email: "",
//         password: ""
//     })
//     const handleChange =(e) => {
//         console.log(e.target.value);
//         console.log(e.target.value, e.target.value)
//     }
//     console.log("state", formData)

//     const onformSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData)

//     }

//     // const onEmailChange = (e) =>{
//     //     console.log("email changed",e.target.value)
//     //     setEmail(e.target.value)
//     // }
//     //     console.log('state',email)
//     //     const onpasswordChange = (e) =>{
//     //     console.log("email changed",e.target.value)
//     //     setPassword(e.target.value)
//     // }
//     //     console.log('state',password)
//     // const onformSubmit = () =>{
//     //     console.log("email changed", e.target.value);
//     //     setPassword(e.target.value)
//     // }
    
//     // hook, sideffet, memorization
//     //usestate


//     return(
//         <div className='mt-10'>
//                 <form className='flex flex-col gap-4' onSubmit={onformSubmit}>
//                     <div className='flex flex-col gap-1'>
//                         {/* label */}
//                         <label className='text-[10px] font-semibold' htmlFor="email">Email: </label>
//                         {/* input */}
//                         <input className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400' name='email' id="email" type='email' placeholder='Email' required onChange={handleChange}/>
//                     </div>
//                     <div className='flex flex-col gap-1'>
//                         {/* label */}
//                         <label className='text-[10px] font-semibold' htmlFor="password">Password: </label>
//                         {/* input */}
//                         <input className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400' name='password' id="password" type='password' placeholder='password' required onChange={handleChange}/>
//                     </div>
//                     <div className='flex flex-col gap-1'>
//                         {/* label */}
//                         <label className='text-[10px] font-semibold' htmlFor="re-password">Password: </label>
//                         {/* input */}
//                         <input className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400' name='re-password' id="re-password" type='password' placeholder='retype Passwor' required onChange={handleChange}/>
//                     </div>
//                     <div className='w-full mt-4'>
//                         <button className='w-full bg-blue-600! py-3.5 text-white font-bold rounded-md' type='submit'>Create Account</button>
//                     </div>
//                 </form>
//             </div>
//     )
    
// }
// export default Loginform
import React, { useState } from 'react'
import { login } from '../../api/auth.api';

const LoginForm = () => {

    const[formData,setFormData] = useState({
        email: "",
        password:"",
    });

    // const [email,setEmail]=useState('email') ;//email
    // const [password, setPassword]=useState("");



    // hook state, sideeffect, memoization
    // useState()
    // useEffect()
    // 
console.log('state',formData);

const handleChange = (e) =>{
    // console.log(e.target);
    // console.log(e.target.value);
    let name=e.target.name;
    let value=e.target.value;
    setFormData({
        ...formData,
        [name]:value
    })
}



const onFormSubmit=async(e)=>{
    try{
        e.preventDefault();
        console.log(formData);
        const response = await login(formData)
        console.log(`on submit`+ response)
    }catch(error){
        console.log(error)
    }
};


  return (
    
        <div className="mt-8">
            <form onSubmit={onFormSubmit} className="flex flex-col gap-5">

                {/* email */}
                <div className="flex flex-col gap-2">
                    {/* label */}
                    <label className="text-base font-semibold text-gray-800" htmlFor="email">Email</label>
                    {/* input */}
                    <input 
                    className="border border-gray-300 px-3 py-3 rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500"
                    onChange={handleChange}
                    value={formData.email}
                    id="email" 
                    name='email'
                    type="email" 
                    placeholder="Enter your email"  required/>
                
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-base font-semibold text-gray-800" htmlFor="password">Password</label>
                    {/* input */}
                    <input 
                    className="border border-gray-300 px-3 py-3 rounded-md text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500"
                    onChange={handleChange}
                    value={formData.password}
                    id="password" 
                    name='password'
                    type="password" 
                    placeholder="Enter your password" required/>
                </div>
                {/* submit button */}
                <div className="w-full mt-2">
                    <button className="w-full bg-red-800 hover:bg-red-900 py-3.5 text-base text-white font-semibold rounded-md cursor-pointer transition-colors"
                    type="submit">Sign In</button>
                </div>
                
            </form>
        </div>
    
  )
}

export default LoginForm