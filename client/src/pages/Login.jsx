import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value,
    })

  }
  const validValue = Object.values(formData).every(el => el);

  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <section className='container w-full mx-auto grid'>
      <div className="grid w-full gap-2 max-w-lg p-8 mx-auto bg-white shadow-lg  rounded-lg mt- ">
        <h1 className="text-center  text-4xl font-medium  ">Welcome to Login Page</h1>
        <form className='grid gap-4' onSubmit={handleSubmit} >
          <div className="grid w-full gap-2">
            <label htmlFor="email" className="text-xl font-medium">Email:</label>
            <input className='w-full border-2 border-gray-300 rounded-md p-2 outline-none focus-within:border-transparent
            focus-within:ring-2 ring-green-600
            ' autoFocus 
            onChange={handleChange}
            value={formData.email}
            type="email" name='email' id='email' placeholder='Enter your email'/>
          </div>

          <div className="grid w-full gap-2">
            <label htmlFor="email" className="text-xl font-medium">Password:</label>
            <div className="relative items-center">
            <input className='w-full border-2  border-gray-300 rounded-md p-2 outline-none focus-within:border-transparent
            focus-within:ring-2 ring-green-600
            ' autoFocus 
            onChange={handleChange}
            value={formData.password}
            type={showPassword ? "text" : "password"} name='password' id='password' placeholder='Enter your password'/>
            <div onClick={()=>setShowPassword(!showPassword)} className="absolute right-4 top-4 ">
              {showPassword ? (
                <FaEye/> ): ( <FaEyeSlash/> )}
            </div>
            </div>
          </div>
          <button type='submit' disabled={!validValue}
           className={` ${validValue ? "bg-secondary cursor-pointer hover:bg-green-700 " : "bg-gray-400 cursor-not-allowed"} text-center 
            w-full  text-white tracking-widest p-2 text-xl font-medium  rounded-md `}
            >Login</button>
        </form>
      </div>
    </section>
  )
}

export default Login
