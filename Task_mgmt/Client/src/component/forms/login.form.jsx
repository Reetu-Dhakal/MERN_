import React, { useState } from 'react'
import { login } from '../../api/auth.api';

const LoginForm = () => {
    
    const [Fromdata, setFormdata] = useState({
        email: '',
        password: ''
    });
    
    const handleChange = (e) => {
        // console.log(e.target);
        // console.log(e.target.value, e.target.name);
        let name = e.target.name;
        let value = e.target.value;
        setFormdata({ 
            ...Fromdata,
            [name]: value
        });
    }

       console.log('state', Fromdata);

    const [email,setEmail] = useState('email'); //email
    const onEmailChange = (e) =>{
        console.log("email changed",e.target.value)
        setEmail(e.target.value)


    // const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');

    // hook state,side effects,memoization
    //usestate()
    //useeffect()

    // const onEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }
    // console.log('state', email);

    // const onPasswordChange = (e) => {
    //     setPassword(e.target.value);
    // }

    }
    const onFromSubmit = async (e) => {
       try {
        e.preventDefault();
        console.log( Fromdata);
        const response = await login(Fromdata);
        console.log('onSubmit', response);
       } catch (error) {
        console.log(error);
       }
    }

    console.log('state', email)
    return(
        <div className='mt-10'>
                <form className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[10px] font-semibold' htmlFor="email">Email: </label>
                        {/* input */}
                        <input className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400' id="email" type='email' placeholder='Email' required onChange={onEmailChange}/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[10px] font-semibold' htmlFor="password">Password: </label>
                        {/* input */}
                        <input className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400' id="password" type='password' placeholder='password' required />
                    </div>
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[10px] font-semibold' htmlFor="re-password">Password: </label>
                        {/* input */}
                        <input className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400' id="re-password" type='password' placeholder='retype Passwor' required />
                    </div>
                    <div className='w-full mt-4'>
                        <button className='w-full bg-blue-600! py-3.5 text-white font-bold rounded-md' type='submit'>Create Account</button>
                    </div>
                </form>
            </div>
    )
}

export default LoginForm;