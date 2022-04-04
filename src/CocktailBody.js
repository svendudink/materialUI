import { useEffect, useState } from "react";
import SingleCocktail from "./SingleCocktail";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CocktailContext } from "./store/store";

function CocktailBody(props) {
  // useEffect(() => {}, []);
  // props.getArr(showCocktails);
const {DataFetcher, cocktailLink, cocktailArray} = useContext(CocktailContext)

useEffect(() => {
  DataFetcher()

  // return () => {
  //   second
  // }
}, [cocktailLink])

  return cocktailArray ? (
    cocktailArray.drinks.map((drink) => {
      return (
        <div key={drink.idDrink}>
          {" "}
          <SingleCocktail
            strDrink={drink.strDrink}
            image={drink.strDrinkThumb}
            sleutel={drink.idDrink}
          />{" "}
        </div>
      );
    })
  ) : (
    <p>loading</p>
  );
}

export default CocktailBody;
