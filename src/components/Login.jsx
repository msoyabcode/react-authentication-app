import React, { useState } from 'react'
import appleImg from '../assets/apple.png'
import googleImg from '../assets/google.png'
import img1 from '../assets/img1.avif'

const Login = ({onLogin, switchToSignup}) => {

    const [formData, setFormData] = useState({
    
      email: "",
      password: ""
    })
  
    const handleChange = (e) =>{
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  
    const handleSubmit = (e) =>{
      e.preventDefault()
      if(formData.email && formData.password){
        // signup
        onLogin(formData.email, formData.password)
      }else{
        alert('fill the all field')
      }
    }
  
  return (
      <div className='min-h-screen flex justify-center items-center p-4'>
          <div className='w-full max-w-6xl  mx-auto bg-linear-to-b from-white via-gray-100 to-yellow-100 rounded-2xl overflow-hidden'>
            <div className='flex flex-col md:flex-row'>
    
              {/* left Section */}
              <div className='w-full md:w-1/2 p-8 md:p-12'>
    
                {/* brand name */}
                <div className='mb-10'>
                <h1 className='inline-block border-2 border-gray-800 px-6 py-3 rounded-full
                font-bold text-xl'>Craxlo</h1>
                </div>
    
                {/* form section  */}
                  <div className=' max-w-md mx-auto'>
    
                  {/* heading and paragraph */}
                  <div className='text-center'>
                    <h2 className='text-3xl font-bold mb-2'>Welcome Back</h2>
                    <p className='text-gray-600 mb-8 text-md'>Sign in to your account to continue</p>
                  </div>
    
                  {/* form start */}
                  <form onSubmit={(handleSubmit)} className='space-y-6'>
    
                      {/* email address */}
                      <div className='border border-gray-300  w-full px-6 py-3 bg-white rounded-full outline-none placeholder:text-sm placeholder:text-gray-600   '>
                        <input 
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          type="text" 
                          placeholder='Email Address' 
                          className='w-full outline-none '  
                         />
                      </div>
    
                      {/* password */}
                      <div className='border border-gray-300  w-full px-6 py-3 bg-white rounded-full outline-none placeholder:text-sm placeholder:text-gray-600   '>
                        <input 
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        type="text" 
                        placeholder='Password'  
                        className='w-full 
                        outline-none ' />
                      </div>
    
                      {/* button */}
                      <button type='submit'  className='w-full bg-amber-400 hover:bg-amber-500 text-gray-900 cursor-pointer py-3 rounded-full text-md font-semibold'>Sign in</button>
                       </form>
                      {/* devider */}
                      <div className='flex items-center my-6'>
                        <div className='grow border-t border-gray-300'></div>
                        <span className='mx-4'>or</span>
                        <div className='grow border-t border-gray-300'></div>
                      </div>
    
                      {/* Social login button */}
                      <div className='flex space-x-4  '>
    
                        <button className='w-1/2 bg-gray-800 px-6 py-3 font-semibold text-white hover:bg-gray-950 transition duration-200 rounded-full cursor-pointer flex items-center justify-center gap-2'>
                          <img src={appleImg} alt="" />
                          Apple
                        </button>
    
                        <button className='w-1/2 bg-white px-6 py-3 font-semibold text-gray-00 border border-gray-300 rounded-full cursor-pointer flex items-center justify-center gap-2'>
                          <img src={googleImg} alt="" />
                          Google
                        </button>
    
                      </div>
    
                      {/* button links */}
                      <div className='flex justify-between flex-col sm:flex-row items-center mt-10 text-sm text-gray-600'>
                        <button onClick={switchToSignup} className='hover:text-yellow-600 transition duration-200 mb-2 sm:mb-0 cursor-pointer'>
                          Don't have an account?
                          <span className='font-semibold ml-1'>Sign up</span>
                        </button>
    
                        <a className='hover:text-yellow-600 transition duration-200 cursor-pointer underline'
                         href="">Forgot Password</a>
                      </div>
                 
                  </div>
              </div>
    
              {/* right section */}
              <div className='w-full md:w-1/2'>
                <img className='w-full h-full object-cover'
                 src={img1} alt="" />
              </div>
    
            </div>
          </div>
        </div>
  )
}

export default Login
