import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (movieID) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US", API_OPTIONS)
        const json = await data.json();
        

        const filterTrailer = json.results.filter(video => video.type == "Trailer")
        const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
        
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{
        getMovieVideos();
    },[])
}

export default useMovieTrailer
