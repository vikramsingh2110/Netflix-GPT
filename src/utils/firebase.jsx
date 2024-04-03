// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnwu0mKQj9Uka_-I4LOxCIJsTJESQ4lxs",
  authDomain: "netflixgpt1-379f7.firebaseapp.com",
  projectId: "netflixgpt1-379f7",
  storageBucket: "netflixgpt1-379f7.appspot.com",
  messagingSenderId: "196448122436",
  appId: "1:196448122436:web:37dbecdc12aa1acf2e2e11",
  measurementId: "G-M0R49SPHZP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();