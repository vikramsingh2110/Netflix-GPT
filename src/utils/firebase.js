// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfI_25QNa52_EgpIVFm1PeGiBprljltJU",
  authDomain: "netflixgpt-fb154.firebaseapp.com",
  projectId: "netflixgpt-fb154",
  storageBucket: "netflixgpt-fb154.appspot.com",
  messagingSenderId: "38823939397",
  appId: "1:38823939397:web:92b1e4093d978e0b31822c",
  measurementId: "G-M72FWC4QQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();