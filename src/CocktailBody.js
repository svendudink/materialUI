import { useEffect, useState } from "react";
import SingleCocktail from "./SingleCocktail";
import { Link } from "react-router-dom";

function CocktailBody(props) {
  // useEffect(() => {}, []);
  // props.getArr(showCocktails);

  return props.cocktailArray ? (
    props.cocktailArray.drinks.map((drink) => {
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
