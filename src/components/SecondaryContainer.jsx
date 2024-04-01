import React from 'react'
import { MovieList } from './MovieList'
import { useSelector } from 'react-redux'

export const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div className='bg-black'>
      <div className='-mt-60 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Hot Shows"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Cool Stuff!"} movies={movies.nowPlayingMovies}/>

    </div>
    </div>
  )
}
