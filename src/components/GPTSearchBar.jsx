import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openai';

export const GPTSearchBar = () => {

    const searchText = useRef(null);
    const handleGPTClick = async() =>{
        console.log(searchText.current.value);
        //Make an API call to GPT API 
    
      const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + ". Only give me name of 5 movies, cooma separated like the example result given ahead. Example result:Don, Gadar, Sholay, Golmaal, Koi Mil Gaya";

      const gptResults =  await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery  }],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptResults.choices);
    }

    const langKey = useSelector(store => store.config.lang)
  return (
    <div className='pt-[5%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 rounded-md' onSubmit={(e) =>e.preventDefault() }>
            <input ref={searchText} type='text' 
            className='p-4 m-6 col-span-9' 
            placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button className='py-2 m-4 px-4 
            bg-red-700 col-span-3 text-white rounded-md' 
            onClick={handleGPTClick} >
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}
