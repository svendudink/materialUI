import React from "react";


// 1. Import hook
import { createContext, useState } from "react";
// 2. Create Context / Store

export const CocktailContext = createContext();

// 3. Create provider

export const CocktailsContextProvider = (props) => {
  console.log("props", props);
  // 4. Move state and function. "Consume" and  "subscribe"
  const [cocktailID, setCocktailID] = useState(11007);
  const [loginState, setLoginState] = useState("notLogged");
  const [userName, setUserName] = useState(undefined);

  

  

  // 5. Return the provide with its value and inject children component

  return (
    <CocktailContext.Provider
    
      value={{ loginState, setLoginState, userName, setUserName  }}
      
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


