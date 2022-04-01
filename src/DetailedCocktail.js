import { SliderThumb } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Ingredients from "./Ingredients";
import "./DetailedCocktail.css";
import { useContext } from "react";
import {CocktailContext} from "./store/store";
import Chat from "./elements/Chat";

function DetailedCocktail(props) {
  const ctx = useContext(CocktailContext);

  console.log(ctx.cocktailID);

  const { id } = useParams();
  console.log("id", id);
  let single = props.arr.drinks.filter((drink) => {
    return drink.idDrink === ctx.cocktailID;
  });

  console.log(single);

  console.log(ctx.cocktailID);

  if (single) {
    return (
      <div className="image">
        <img src={single[0].strDrinkThumb} alt="Broken" />
        <li>Name: {single[0].strDrink}</li>
        <li>Glass: {single[0].strGlass} </li>
        <h1>Ingredients</h1>
        <Ingredients single={single} />
        <h1>Preperation</h1>
        <li>{single[0].strInstructions}</li>
        <Chat />
      </div>
      
    );
  } else {
    return <div>Loading</div>;
  }
}

export default DetailedCocktail;
