import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import CocktailBody from "./CocktailBody";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

import DetailedCocktail from "./DetailedCocktail";
import { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import Loginplace from "./elements/Loginplace";
import { CocktailContext, CocktailsContextProvider } from "./store/store";


function App(props) {
  // const [cocktailArray, setCocktailArray] = useState(null);
  // const [cocktailLink] = useState(
  //   "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  // );
  

  
  
  
  // const DataFetcher = async () => {
  //   try {
  //     const response = await fetch(cocktailLink);
  //     console.log(response);
  //     const dataASync = await response.json();
  //     console.log(dataASync);
  //     setCocktailArray(dataASync);
      
  //     // console.log("showCocktails", showCocktails);
  //     props.getArr(dataASync);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const { id } = useParams()
  // console.log(id);
  

  // useEffect(() => {
  //   DataFetcher();
  // }, [cocktailLink]);

  return (
    <div>
      <CocktailsContextProvider>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route
            path={"/Mainpage"}
            
            element={<CocktailBody  />}
          />
          <Route
            path={"/"}
            
            element={<CocktailBody  />}
          />
       
          
          <Route
            path="/cocktails/:id"
            element={<DetailedCocktail  />}
          />
        </Routes>
      </Router>
      <Loginplace />


      </CocktailsContextProvider>
      
    </div>
  );
}

export default App;
