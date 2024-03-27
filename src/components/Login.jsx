import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg' 
        alt='logo'
        />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80'>
        <h1 className='font-white text-3xl py-4'>Sign In</h1>
        <input type="text" placeholder="Email Address" className='p-4 my-4 w-full bg-gray-700'/>
        <input type="password" placeholder="Password" className='p-4 my-4 w-full bg-gray-700'/>
        <button className='p-4 my-6 bg-red-500 w-full rounded-sm'>Sign In</button>
      </form>
    </div>
  )
}

export default Login