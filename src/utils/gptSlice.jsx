import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const gptSlice = createSlice ({
    name : 'gpt',
    initialState : {
        showGPTSearch : false,
        gptMovies : null,
        movieResults : null,
        movieNames : null
    },
    reducers : {
        toggleGPTSearchView: (state, action)=> {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGptMovieResults: (state,action) => {
            const {movieNames, movieResults} = action.payload
             state.movieNames = movieNames;
             state.movieResults = movieResults;
        }
    }
})

export const {toggleGPTSearchView, addGptMovieResults} = gptSlice.actions;
export default gptSlice.reducer;
