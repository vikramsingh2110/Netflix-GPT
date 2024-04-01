import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, ProfileIMG } from '../utils/constants';


const Header = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL
        }));
         navigate("/browse")
          
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
          
        }
      })

      //unsubscribe when component unmounts
      return ()=> unsubscribe();
},[])
 
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () =>{
    signOut(auth)
    .then(() => {})
    .catch((error) => {
     navigate("/error");
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src= {LOGO}
      alt='logo' />
     {user && <div className='p-2'>
        <img 
        className='flex w-12 h-12'
        src= {ProfileIMG} />
         <button onClick={handleSignOut} className='font-bold text-white cursor-pointer'>(Sign Out)</button>
      </div> }
    </div>
    
  )
}

export default Header