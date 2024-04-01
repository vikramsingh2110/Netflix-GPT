import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth"
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BackgroundIMG } from '../utils/constants'

const Login = () => {

  const dispatch = useDispatch();
  const [isSignIn, setISSignIN] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {

    //validate the form data
    //checkValidateData(email,password)
    
    const message = checkValidateData(email.current.value,password.current.value)
    setErrorMessage(message)

    if(message) return;
    //else sign in/sign up

    if(!isSignIn){
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://steamuserimages-a.akamaihd.net/ugc/872998386575050985/84BC2665965A3FF9F2E478C10A000B8DCFED22C6/"
    }).then(() => {
      // Profile updated!
      const {uid, email, displayName, photoURL} = auth.currentUser; 
      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));  
      
    })
    .catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message)
    });
    
    
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage)
    // ..
  });
    }
    else{
      //Sign In Logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage)
  });
      

    }
    
    }


  const toggleSignInForm = () => {
    setISSignIN(!isSignIn);
  }


  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src= {BackgroundIMG}
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