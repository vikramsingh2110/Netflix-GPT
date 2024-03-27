import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'

const Login = () => {

  const [isSignIn, setISSignIN] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {

    //validate the form data
    //checkValidateData(email,password)
    
    const message = checkValidateData(email.current.value,password.current.value)
    setErrorMessage(message)
    
    }


  const toggleSignInForm = () => {
    setISSignIN(!isSignIn);
  }


  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg' 
        alt='logo'
        />
      </div>
      <form 
      onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 
      text-white rounded-md bg-opacity-80'>
        <h1 className='font-white text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!(isSignIn) && <input type="username" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-700'/>}
        <input 
        ref={email} type="text" placeholder="Email Address" 
        className='p-4 my-4 w-full bg-gray-700'/>
        <input
        ref={password} type="password" placeholder="Password" 
        className='p-4 my-4 w-full bg-gray-700'/>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-500 w-full rounded-sm' onClick={handleButtonClick}> 
          {isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm} >{isSignIn ? "New to Netflix ? Sign Up Now" : "Already Registered ? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login