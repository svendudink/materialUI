import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyARO3Yy1xMWq4O_rBVkepZbROtcf6vt0yg",
    authDomain: "cocktail-app-94942.firebaseapp.com",
    projectId: "cocktail-app-94942",
    storageBucket: "cocktail-app-94942.appspot.com",
    messagingSenderId: "639601586044",
    appId: "1:639601586044:web:2203c3eac7ccdd14c2bef9",
    measurementId: "G-TD9N5B5X45",
  };


  export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);