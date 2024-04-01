import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieList = ({title,movies}) => {
    console.log(movies)
  return (
    <div className='px-6'>
        <h1 className='text-3xl text-white py-4'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
            {/* <MovieCard posterPath= {movies[1].poster_path} /> */}
            {movies && movies.length > 1 && 
            movies.map(movie=> <MovieCard key={movie.id} 
            posterPath={movie.poster_path} 
            />)}
            
            </div>
        </div>
    </div>
  )
}
