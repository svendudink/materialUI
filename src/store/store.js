import React, {useEffect} from "react";


// 1. Import hook
import { createContext, useState } from "react";
// 2. Create Context / Store

export const CocktailContext = createContext();

// 3. Create provider

export const CocktailsContextProvider = (props) => {

  // 4. Move state and function. "Consume" and  "subscribe"
  const [cocktailID, setCocktailID] = useState(11007);
  const [loginState, setLoginState] = useState("notLogged");
  const [userName, setUserName] = useState(undefined);
  // const [cocktailArrayContext, setCocktailArrayContext] = useState('Empty')
  const [profilePicUrl, setProfilePicUrl] = useState()

  
  const [cocktailArray, setCocktailArray] = useState(null);
  const [cocktailLink] = useState(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  );
  

  
  
  
  const DataFetcher = async () => {
    try {
      const response = await fetch(cocktailLink);
      console.log(response);
      const dataASync = await response.json();
      console.log(dataASync);
      setCocktailArray(dataASync);
      
      // console.log("showCocktails", showCocktails);
      props.getArr(dataASync);
    } catch (err) {
      console.log(err);
    }
  };
  
  
  // 5. Return the provide with its value and inject children component



  //try and use with store



  return (
    <CocktailContext.Provider
    
      value={{ loginState, setLoginState, userName, setUserName, cocktailArray, setCocktailArray, DataFetcher, cocktailLink, setProfilePicUrl, profilePicUrl }}
      
    >
      {props.children}
    </CocktailContext.Provider>
  );
};

// default export vs (name) export


// const CocktailContext = React.createContext({
//   cocktailID: 11007,
//   loginState: "notLogged",
//   //Loginstates notLogged attempt logged
//   userName: "Not logged in",
// });


