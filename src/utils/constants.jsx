export const LOGO = "https://pngimg.com/uploads/netflix/netflix_PNG17.png"
export const ProfileIMG = 'https://steamuserimages-a.akamaihd.net/ugc/872998386575050985/84BC2665965A3FF9F2E478C10A000B8DCFED22C6/'
export const BackgroundIMG = 'https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg'

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

  export const SUPPORTED_LANGUAGE = [
    {identifier : "en" , name : "English"}, 
    {identifier : "hindi" , name : "Hindi"},
    {identifier : "spanish" , name : "Spanish"}
  ]

 export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;