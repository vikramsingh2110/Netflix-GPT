import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

export const GPTSearchBar = () => {

    const langKey = useSelector(store => store.config.lang)
  return (
    <div className='pt-[5%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 rounded-md'>
            <input type='text' 
            className='p-4 m-6 col-span-9' 
            placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button className='py-2 m-4 px-4 
            bg-red-700 col-span-3 text-white rounded-md'>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}
