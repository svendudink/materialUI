import "./SingleCocktail.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {CocktailContext} from "./store/store";

function SingleCocktail(props) {
  const ctx = useContext(CocktailContext);

  const clickHandler = () => {
    ctx.cocktailID = props.sleutel;
  };

  return (
    <Link to={`/cocktails/${props.sleutel}`}>
      <div onClick={clickHandler} className="imgBox">
        <div className="image">
          <img src={props.image} alt="Broken" />
          <div key={props.sleutel} className="text">
            {props.strDrink}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SingleCocktail;
