import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { MainContainer } from './MainContainer';
import { SecondaryContainer } from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import { GPTSearch } from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch)
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div >
       <Header />
       {
        showGPTSearch ? (<GPTSearch /> )
        :( <>
            <MainContainer />
           <SecondaryContainer />
        </>
       )}
       
       
       {/*
          Main Container
            - VideoBackground
            - VideoTitle
          Secondary Container
            - MovieList * n
              - cards * n
       */}
    </div>
   
 

  )
}

export default Browse