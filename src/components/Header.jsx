import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, ProfileIMG, SUPPORTED_LANGUAGE } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


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
  const handleGPTSearchClick =() =>{
    //Toggle GPT Search button
    dispatch(toggleGPTSearchView());
  }

  const handleLangChange = (e) =>{
    dispatch(changeLanguage(e.target.value))
  }
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch)
  const handleSignOut = () =>{
    signOut(auth)
    .then(() => {})
    .catch((error) => {
     navigate("/error");
    });
  }
  return (
   <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row p-2 justify-between '>
      <img className='w-44 mx-auto md:mx-0' src= {LOGO}
      alt='logo' />
    
     {user && (
     <div className='flex p-2'>
       {showGPTSearch && ( <select className='py-2 px-4 mx-4 my-8 
        mt-0 rounded-md bg-gray-900 
        text-white' onChange={handleLangChange}>
        {SUPPORTED_LANGUAGE.map((lang) => (<option key={lang.identifier} 
        value={lang.identifier}>{lang.name}
        </option>
        ))}
         
      </select>)}
      <button className='py-2 px-4 mx-4 my-8 mt-0 
      bg-violet-400 text-white 
      rounded-md align-bottom'
      onClick={handleGPTSearchClick}
      > {!showGPTSearch ? "GPT Search" : "Homepage" }
      </button>
        <img 
        className='flex w-12 h-12'
         alt='Profile Img' src= {ProfileIMG} />
         <button onClick={handleSignOut} className='font-bold text-white cursor-pointer'>(Sign Out)</button>
      </div> 
      )}
    </div>
    
  )
}

export default Header