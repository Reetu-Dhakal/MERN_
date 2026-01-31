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

    return (
        <div className='mt-10 '>
            <form onSubmit={onFromSubmit} className='flex flex-col gap-4'>

                { /* email*/}
                <div className='flex flex-col gap-1'>
                    <label className='text-[16px] font-semibold' htmlFor='email'>Email Address</label>
                    {/*input*/}
                    <input
                        className='border border-gray-400 px-2 py-1.5 rounded-md focus:outline-green-400'
                        onChange={handleChange}
                        id='email'
                        name='email'
                        type='email'
                        value={Fromdata.email}
                        placeholder='Enter your email'
                        required
                    />
                </div>
                { /* password*/}
                <div className='flex flex-col gap-1'>
                    <label className='text-[16px] font-semibold' htmlFor='c_password'> Password</label>
                    {/*input*/}
                    <input
                        className='border border-gray-400 px-2 py-1.5 rounded-md focus:outline-green-400'
                        onChange={handleChange}
                        id='c_password'
                        name='password'
                        type='password'
                        value={Fromdata.password}
                        placeholder='Enter your password'
                        required
                    />
                </div>
                <div className='w-full'>
                    <button
                        className='w-full bg-green-600 py-3.5 text-white font-bold rounded-md cursor-pointer'
                        type='submit'>Login</button>
                </div>
            </form>
        </div>

    )
}

export default LoginForm;