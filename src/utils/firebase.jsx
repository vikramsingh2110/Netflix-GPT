// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGkhvurJZ91IpiWJiRLVXRAH6ya_5ib_E",
  authDomain: "netflixgpt-3ca71.firebaseapp.com",
  projectId: "netflixgpt-3ca71",
  storageBucket: "netflixgpt-3ca71.appspot.com",
  messagingSenderId: "282190980727",
  appId: "1:282190980727:web:cc2635ac15689e029c8872",
  measurementId: "G-481QP4H18M"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();