import { SliderThumb } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Ingredients from "./Ingredients";
import "./DetailedCocktail.css";
import { useContext } from "react";
import {CocktailContext} from "./store/store";
import Chat from "./Chat";

function DetailedCocktail(props) {


  
  

  const {cocktailArray, DataFetcher, cocktailLink} = useContext(CocktailContext)

  const {id} = useParams()
  console.log('id', id)
  

  useEffect(() => {
    
  DataFetcher()
    // return () => {
    //   second
    // }
  }, [cocktailLink])

  

 

  if (cocktailArray) {
    let single = cocktailArray.drinks.filter((drink) => {
      return drink.idDrink === id;
    })
    console.log(single);
    
    return (
      <div className="image">
        <img src={single[0].strDrinkThumb} alt="Broken" />
        <li>Name: {single[0].strDrink}</li>
        <li>Glass: {single[0].strGlass} </li>
        <h1>Ingredients</h1>
        <Ingredients single={single} />
        <h1>Preperation</h1>
        <li>{single[0].strInstructions}</li>
        <div><Chat id={id}/></div>
      </div>
      
    );
  } else {
    return <div>Loading</div>;
  }
}

export default DetailedCocktail;
