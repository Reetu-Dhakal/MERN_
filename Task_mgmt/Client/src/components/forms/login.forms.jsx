import React, { useState } from 'react'
import { login } from '../../api/auth.api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'


const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onFormSubmit = async (e) => {
    try {
      e.preventDefault()
      console.log('Attempting login with:', formData)

      const response = await login(formData)
      console.log('Full login response:', response)

      // Check for token in different possible locations
      const token = response?.access_token || response?.token || response?.data?.access_token || response?.data?.token
      
      console.log('Token found:', token)

      if (token) {
        localStorage.setItem('access_token', token)
        console.log('Token saved to localStorage:', token)
        toast.success('Login successful!')
        navigate('/')
      } else {
        console.error('No token in response')
        toast.error('Login failed - No token received')
      }
    } catch (error) {
      console.error('Full error object:', error)
      console.error('Error response:', error.response?.data)
      const errorMsg = error.response?.data?.message || error.message || 'Login failed'
      console.log('Displaying error:', errorMsg)
      toast.error(errorMsg)
    }
  }

  return (
    <div className='mt-10'>
      <form onSubmit={onFormSubmit} className='flex flex-col gap-4'>

        {/* Email */}
        <div className='flex flex-col gap-1'>
          <label className='text-[16px] font-semibold' htmlFor='email'>
            Email
          </label>
          <input
            className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400'
            onChange={handleChange}
            id='email'
            type='email'
            name='email'
            value={formData.email}
            placeholder='johndoe@gmail.com'
            required
          />
        </div>

        {/* Password */}
        <div className='flex flex-col gap-1'>
          <label className='text-[16px] font-semibold' htmlFor='password'>
            Password
          </label>
          <input
            className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400'
            onChange={handleChange}
            id='password'
            type='password'
            name='password'
            value={formData.password}
            placeholder='Enter password'
            required
          />
        </div>

        {/* Submit */}
        <div className='w-full mt-4'>
          <button
            className='w-full bg-blue-600 py-3.5 text-white font-bold rounded-sm cursor-pointer'
            type="submit"
          >
            Login
          </button>
        </div>

      </form>
    </div>
  )
}

export default LoginForm



 // *hook: it's a functions ,state, side-effect, memorization
    // can only be used in react ko component and not in conditionals better to use on top of a function
    // useState()
    // useEffect()

    // const [password,setpassword] = useState('')
    // const [email,setemail] = useState('')


    // const onPasswordChange=(e)=>{
    //     console.log('password changed',e.target.value);
    //     setpassword(e.target.value)
    // }

    // const onEmailChange=(e)=>{
    //     console.log('email changed',e.target.value);
    //     setemail(e.target.value)
    // }