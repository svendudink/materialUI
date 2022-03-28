import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import CocktailBody from "./CocktailBody";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginGoogle from "./LoginGoogle";
import DetailedCocktail from "./DetailedCocktail";
import { useState, useEffect } from "react";
import { createContext } from "react";

function App() {
  const [webArr, setWebArr] = useState();

  const getArr = (passArr) => {
    setWebArr(...passArr);
  };

  if (webArr) {
    console.log(webArr);
  }

  return (
    <div>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/Mainpage" element={<CocktailBody getArr={getArr} />} />
          <Route path="/Login" element={<LoginGoogle />} />
          <Route
            path="/cocktails/:id"
            element={<DetailedCocktail arr={webArr} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
