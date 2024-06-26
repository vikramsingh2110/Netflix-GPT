import React from 'react'
import { GPTSearchBar } from './GPTSearchBar'
import { GPTMovieSuggestion } from './GPTMovieSuggestion'
import { BackgroundIMG } from '../utils/constants'

export const GPTSearch = () => {
  return (
    
    <div>
          <div className='fixed -z-10'>
        <img src= {BackgroundIMG}
        alt='logo'
        />
      </div>
        <GPTSearchBar />
        <GPTMovieSuggestion />
    </div>
  )
}
