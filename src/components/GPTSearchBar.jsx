import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../utils/gptSlice';

export const GPTSearchBar = () => {

    const dispatch = useDispatch();
    const searchText = useRef(null);

    const searchMovieTMDB = async(movie) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query="+
        movie +
        "&include_adult=false&language=en-US&page=1", 
        API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    }

    const handleGPTClick = async() =>{
        //console.log(searchText.current.value);
        //Make an API call to GPT API 
    
      const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + ". Only give me name of 5 movies, cooma separated like the example result given ahead. Example result:Don, Gadar, Sholay, Golmaal, Koi Mil Gaya";

      const gptResults =  await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery  }],
        model: 'gpt-3.5-turbo',
      });
      if(!gptResults.choices){
        console.log("Error")
      }

      console.log(gptResults.choices?.[0]?.message?.content);
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
      // for each movie search tmdb api
      const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))
      const tmdbResults = await  Promise.all(promiseArray);
      console.log(tmdbResults)

      dispatch(addGptMovieResults({movieNames : gptMovies, movieResults: tmdbResults}))
      
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
