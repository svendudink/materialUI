import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { useContext } from "react";
import {CocktailContext} from "../store/store";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
function Loginplace(props) {
  const {loginState, setLoginState} = useContext(CocktailContext);
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyARO3Yy1xMWq4O_rBVkepZbROtcf6vt0yg",
    authDomain: "cocktail-app-94942.firebaseapp.com",
    projectId: "cocktail-app-94942",
    storageBucket: "cocktail-app-94942.appspot.com",
    messagingSenderId: "639601586044",
    appId: "1:639601586044:web:2203c3eac7ccdd14c2bef9",
    measurementId: "G-TD9N5B5X45",
  };

  // Initialize Firebase;
  const [checkIfSignedIn, setCheckIfSignedIn] = useState(false);
  
  const {userName, setUserName} = useContext(CocktailContext);

 console.log(userName);


 




  const app = initializeApp(firebaseConfig);

  function isUserSignedIn() {
    return !!getAuth().currentUser;
  }




  useEffect(() => {
    if (loginState === 'attempt') {signIn()}
    if (loginState === 'notLogged') {console.log('signout'); signOut(getAuth(), setUserName(undefined))}
    
  }, [loginState]);

  // setInterval(() => {
  //   console.log(ctx.loginState);
  // }, 2000);

  

  async function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    let provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
    setCheckIfSignedIn(isUserSignedIn());
    setUserName(getAuth().currentUser.displayName);
  }


  return null;
}

export default Loginplace;
