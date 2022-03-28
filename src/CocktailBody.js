import { useEffect, useState } from "react";
import SingleCocktail from "./SingleCocktail";
import { Link } from "react-router-dom";

function CocktailBody(props) {
  const [showCocktails, setShowCocktails] = useState(null);
  const [cocktailLink, setCocktailLink] = useState(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  );

  const DataFetcher = async () => {
    try {
      const response = await fetch(cocktailLink);
      console.log(response);
      const dataASync = await response.json();
      console.log(dataASync);
      setShowCocktails(dataASync);
      // console.log("showCocktails", showCocktails);
      props.getArr(dataASync);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    DataFetcher();
  }, [cocktailLink]);

  // useEffect(() => {}, []);
  // props.getArr(showCocktails);

  return showCocktails ? (
    showCocktails.drinks.map((drink) => {
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
